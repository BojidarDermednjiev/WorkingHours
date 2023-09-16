import React from "react";
import { months } from "../../utils/helpers";

export default function Day(props) {
  const { setWorkingDay, data, date, monthIndex } = props;
  const { day, weekOfTheDay, isWorking } = data;
  try {
    return (
      <div
        onClick={() => {
          setWorkingDay({
            day: day,
            month: months[date.getMonth() + monthIndex - 1],
          });
        }}
        className={`text-center border border-r border-gray-300 ${
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
