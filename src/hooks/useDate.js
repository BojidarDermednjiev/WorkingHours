import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "change_month_index":
         // Change for next year

    // Check if there is working day or month, no to be able to change for previous non-working month
      return {
        ...state,
        monthIndex: (state.monthIndex + action.payload),
      };
    case "add_working_days":
      return {
        ...state,
        displayWorkingDays:{
            ...state.displayWorkingDays,
            [state.monthIndex]: {
                days: action.payload,
              },
        }
      
      };
      case "set_working_day":
        return{
            ...state,
            workingData:{
                day: action.payload.day,
                month: action.payload.month

            }
        }
    default:
      return state;
  }
}
export default function useDate() {
  const date = new Date();

  const [state, dispatch] = useReducer(reducer, {
    currentYear: date.getFullYear(),
    monthIndex: 1,
    perWorkDays: 2,
    displayWorkingDays: {},
    workingData: {
      day: null,
      month: null,
    },
  });

  return [state, dispatch, date];
}
