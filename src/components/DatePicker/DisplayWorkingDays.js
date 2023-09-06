import React, { useMemo } from "react";

import { dateFormatDay, days, months } from "./data";
import { getDaysInMonth, isObjectEmpty } from "../../utils/helpers";

export default function DisplayWorkingDays({
  monthIndex,
  currentYear,
  currMonth,
  displayWorkingDays,
  setDisplayWorkingDays,
  date,
  changeMonth,
  workingDay,
  setWorkingDay,
}) {
  const currMonthDisplay = months[date.getMonth() + monthIndex - 1];
  const daysInCurrentMonth = getDaysInMonth(currentYear, currMonth);

  useMemo(() => {
    try {
      const arr = [];

      for (let i = 0; i < daysInCurrentMonth.length; i++) {
        const dayDate = new Date(currentYear, currMonth - 1, i + 1).getDay();

        // Setting up data for display

        const data = {
          text: "",
          day: i + 1,
          weekOfTheDay: dateFormatDay[dayDate],
        };
        // Prev date
        const prevDay = arr[arr.length - 1];

        // Initial Text
        if (workingDay.day - 1 == i && currMonthDisplay == workingDay.month) {
          data.text = "Работи";
        }

        // Checking for doubles
        if (prevDay?.text == "Работи") {
          data.text = "Работи";
        }
        if (prevDay?.text == "Почива") {
          data.text = "Почива";
        }

        //
        if (arr.length == 1) {
          if (prevDay.text == "Почива") data.text = "Почива";
          if (prevDay.text == "Работи") data.text = "Работи";
        }

        // If arr gets more than two
        if (arr.length >= 2) {
          const prevTwo = arr.slice(-2);
          if (prevTwo[0].text == "Работи" && prevTwo[0].text == "Работи") {
            data.text = "Почива";
          }
          if (prevTwo[0].text == "Почива" && prevTwo[1].text == "Почива") {
            data.text = "Работи";
          }
        }

        // If month is different than initial
        if (!isObjectEmpty(workingDay) && arr.length < 2) {
          if (currMonthDisplay != workingDay.month) {
            const [befLastDay, lastDay] =
              displayWorkingDays[monthIndex - 1]?.days?.slice(-2);

            if (befLastDay.text == "Работи" && lastDay.text == "Работи") {
              data.text = "Почива";
            }
            if (befLastDay.text == "Почива" && lastDay.text == "Почива") {
              data.text = "Работи";
            }
            if (arr.length == 0) {
              if (befLastDay.text == "Почива" && lastDay.text == "Работи") {
                data.text = "Работи";
              }
              if (befLastDay.text == "Работи" && lastDay.text == "Почива") {
                data.text = "Почива";
              }
            }

            if (arr.length == 1) {
              if (befLastDay.text == "Почива" && lastDay.text == "Работи") {
                data.text = "Почива";
              }
              if (befLastDay.text == "Работи" && lastDay.text == "Почива") {
                data.text = "Работи";
              }
            }
          }
        }

        // Add data to the array
        arr.push(data);
      }
      setDisplayWorkingDays((prev) => ({
        ...prev,
        [monthIndex]: {
          days: arr,
        },
      }));
    } catch (e) {
      console.log(e);
    }
  }, [monthIndex, workingDay]);

  if(!displayWorkingDays[monthIndex]?.days[0]){
    return <div>Loading...</div>
  }
  const emptyDivs = Array?.apply(
    null,
    Array(
      days?.indexOf(
        displayWorkingDays[monthIndex]?.days[0]?.weekOfTheDay 
      )
    )
  );

  return (
    <>
      <div className="flex items-center justify-between">
        <div onClick={() => changeMonth(-1)}>Предишен месец</div>
        <div onClick={() => changeMonth(1)}>Следващ месец</div>
      </div>
      <div className="grid grid-cols-7 mt-5">
        {days.map((day) => {
          return (
            <div
              key={day}
              className="flex items-center justify-center text-lg font-semibold border-r border-y border-slate-500"
            >
              {day.slice(0, 1)}
            </div>
          );
        })}
        {emptyDivs?.map((emptyDiv, index) => {
          return <div key={index}></div>;
        })}
        {displayWorkingDays[monthIndex]?.days?.map((data) => {
          try {
            return (
              <div
                onClick={() => {
                  setWorkingDay({
                    day: data.day,
                    month: months[date.getMonth() + monthIndex - 1],
                  });
                }}
                className={`text-center border border-r border-gray-300 ${
                  data.weekOfTheDay == "Saturday" || data.weekOfTheDay == "Sunday"
                    ? "bg-blue-500"
                    : "bg-gray-100"
                }`}
              >
                <h2>{data.day}</h2>
                <h3>{data.text}</h3>
              </div>
            );
          } catch (e) {
            return <div>Проблем: ({e})</div>;
          }
        })}
      </div>
      <div className="flex flex-col mt-10 lg:flex-row gap-x-10 gap-y-4">
        <div>
          <h2 className="text-lg font-bold">Working day:</h2>
          {workingDay.day}
        </div>
        <div>
          <h2 className="text-lg font-bold">Working Month:</h2>
          {workingDay.month}
        </div>
        <div>
          <h2 className="text-lg font-bold">Current month:</h2>
          {/* date.getMonth() + monthIndex */}
          {currMonthDisplay}
        </div>
      </div>
    </>
  );
}
