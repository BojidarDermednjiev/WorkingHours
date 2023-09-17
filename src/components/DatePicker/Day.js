import React from "react";

export default function Day(props) {
  const { data, dispatch, state } = props;
  const { day, weekOfTheDay, isWorking } = data;

  const setWorkingDay = () => {
    dispatch({
      type: "set_working_day",
      payload: {
        day,
        month: state.date.getMonth(),
        year: state.date.getFullYear(),
      },
    });
  };
  try {
    return (
      <div
        onClick={setWorkingDay}
        className={`text-center  cursor-pointer hover:scale-110 transition-all py-4 text-3xl font-semibold rounded-md ${isWorking === null ? "bg-[#349ed8]": !isWorking ? "bg-green-400" : "bg-red-600"}`}
      >
        <h2>{day}</h2>
        
      </div>
    );
  } catch (e) {
    return <div>Проблем: ({e})</div>;
  }
}


// {
//   weekOfTheDay == "Saturday" || weekOfTheDay == "Sunday"
//     ? "bg-sky-100"
//     : "bg-gray-100"
// }