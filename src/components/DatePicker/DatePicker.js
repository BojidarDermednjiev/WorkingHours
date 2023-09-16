import { useEffect, useState } from "react";
import DisplayWorkingDays from "./DisplayWorkingDays";
import { getDaysInMonth, months } from "../../utils/helpers";
import useDate from "../../hooks/useDate";

function DatePicker() {


  const [state,dispatch,date] = useDate()

  const currMonth = date.getMonth() + state.monthIndex;


  const changeMonth = (num) => {
   
    const action = {type: "change_month_index", payload: num}
    dispatch(action);
  };
  const currMonthDisplay = months[date.getMonth() + state.monthIndex - 1];
  const daysInCurrentMonth = getDaysInMonth(state.currentYear, currMonth);

  return (
    <DisplayWorkingDays

    state={state}
    dispatch={dispatch}
    date={date}
      currMonth={currMonth}
      
      // Data
      daysInCurrentMonth={daysInCurrentMonth}

      // Displayers
      currMonthDisplay={currMonthDisplay}

      // Setters
      changeMonth={changeMonth}
    

    />
  );
}

export default DatePicker;
