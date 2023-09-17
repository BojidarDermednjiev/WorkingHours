

// Utils
import { getDaysInMonth, months } from "../../utils/helpers";
// Hooks
import useDate from "../../hooks/useDate";
// Components
import DisplayWorkingDays from "../DatePicker/DisplayWorkingDays";


function DatePicker() {
  const [state, dispatch] = useDate();

  const month = state.date.getMonth();
  
  const changeMonth = (num) => { 

    // Check if there is working day or month, no to be able to change for previous non-working month

    // Change for next year
    
    const action = { type: "change_month_index", payload: num };
    dispatch(action);
  };
  const currMonthDisplay = months[month];

  const daysInCurrentMonth = getDaysInMonth(
    state.date.getFullYear(),
    month
  );

  return (
    <DisplayWorkingDays
      state={state}
      dispatch={dispatch}
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
