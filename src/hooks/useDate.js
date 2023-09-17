import React, { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "change_per_work_days":
      return {
        ...state,
        perWorkDays: state.perWorkDays + action.payload,
      };
    case "change_month_index":
      const newDate = new Date(state.date);
      newDate.setMonth(newDate.getMonth() + action.payload);

      return {
        ...state,
        date: newDate,
      };
    case "add_working_days":
      const year = state.date.getFullYear();
      const month = state.date.getMonth();
      const cond = `${year}_${month}`;

      return {
        ...state,
        displayWorkingDays: {
          ...state.displayWorkingDays,
          [cond]: {
            days: action.payload,
          },
        },
      };

    case "set_working_day":
      return {
        ...state,
        workingData: {
          day: action.payload.day,
          month: action.payload.month,
          year: action.payload.year,
        },
      };
    default:
      return state;
  }
}
export default function useDate() {
  const [state, dispatch] = useReducer(reducer, {
    date: new Date(),
    perWorkDays: 3,
    displayWorkingDays: {},
    workingData: {
      day: null,
      month: null,
      year: null,
    },
  });

  return [state, dispatch];
}
