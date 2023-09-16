import React from "react";

export default function Day(props) {
  const {  data,dispatch, state} = props;
  const { day, weekOfTheDay, isWorking } = data;

  const setWorkingDay = ()=>{
    dispatch({type: "set_working_day", payload: {
      day,
      month: state.date.getMonth(),
      year: state.date.getFullYear()
    }})
  }
  try {
    return (
      <div
      
        onClick={setWorkingDay}
        className={`text-center border border-r border-gray-300 cursor-pointer hover:bg-cyan-200 ${
          weekOfTheDay == "Saturday" || weekOfTheDay == "Sunday"
            ? "bg-sky-100"
            : "bg-gray-100"
        }`}
      >
        <h2>{day}</h2>
        {isWorking !== null && (
          <h3
            className={`${
              isWorking ? "text-green-500" : "text-red-500"
            } font-bold`}
          >
            {isWorking ? "Раб" : "Не Раб"}
          </h3>
        )}
      </div>
    );
  } catch (e) {
    return <div>Проблем: ({e})</div>;
  }
}
