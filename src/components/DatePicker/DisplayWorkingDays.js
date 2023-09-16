import React, { useMemo, useState } from "react";

import {
  allAreEqual,
  dateFormatDay,
  days,
  getDaysInMonth,
  isObjectEmpty,
  months,
} from "../../utils/helpers";
import Day from "./Day";

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

  const [workingDays, setWorkingDays] = useState(3);

  useMemo(() => {
    try {
      const arr = [];

      let skipWorkingDays = 0;
      let skipRestDays = 0;

      for (let i = 0; i < daysInCurrentMonth.length; i++) {
        const dayDate = new Date(currentYear, currMonth - 1, i + 1).getDay();

        // Setting up data for display
        const data = {
          isWorking: false,
          day: i + 1,
          weekOfTheDay: dateFormatDay[dayDate],
        };

        // Skipping days if they are not set
        if (!workingDay.day || !workingDay.month) {
          data.isWorking = null;
          arr.push(data);
          continue;
        }

        // !----- Next Month ------!
        if (workingDay.month != currMonthDisplay && i == 0) {
          /*
          Only days must be setup, and getted from last month. 
          Besides that the logic stays the same
          */

          // Getting prev Month data
          const prevMonth = displayWorkingDays[monthIndex - 1];

          // Last two days from last month
          const lastDays = prevMonth.days
            .slice(-workingDays)
            // And formating to true and false values
            .map((day) => day.isWorking);

          // Cheching if the values are all the same
          if (allAreEqual(lastDays)) {
            if (lastDays[0]) {
              skipRestDays = workingDays;
            } else {
              skipWorkingDays = workingDays;
            }
            // If values are not the same
          } else {
            // Getting the last values types. Only this matters
            const type = lastDays[lastDays.length - 1];

            // How many times to skip
            let skipTimes = 0;

            for (let j = lastDays.length - 1; j > 0; j--) {
              // Break if something like that happes: false, true -> this breaks on false
              if (lastDays[j] != type) break;
              skipTimes++;
            }
            // condition for not repeating myself
            const cond = workingDays - skipTimes;
            // And setting the loop
            type ? (skipWorkingDays = cond) : (skipRestDays = cond);
          }
        }
        // !----- Curr month ------!

        // RestDays
        if (skipRestDays > 0) {
          arr.push(data);

          skipRestDays--;
          if (workingDay.month != currMonthDisplay && skipRestDays == 0) {
            skipWorkingDays = workingDays;
          }
          continue;
        }
        // WorkingDays
        if (skipWorkingDays > 0) {
          data.isWorking = true;
          arr.push(data);
          skipWorkingDays--;
          if (skipWorkingDays == 0) {
            skipRestDays = workingDays;
          }
          continue;
        }
        // If working day is set
        if (workingDay.day <= i + 1 && workingDay?.month == currMonthDisplay) {
          data.isWorking = true;
          skipWorkingDays = workingDays - 1;
          arr.push(data);
          // Days before the chosen day
        } else {
          data.isWorking = null;
          arr.push(data);
          continue;
        }
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

  if (!displayWorkingDays[monthIndex]?.days[0]) {
    return <div>Loading...</div>;
  }
  const emptyDivs = Array?.apply(
    null,
    Array(days?.indexOf(displayWorkingDays[monthIndex]?.days[0]?.weekOfTheDay))
  );

  return (
    <>
      <div className="flex items-center justify-between mx-5 mt-10">
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
          return (
            <Day
              key={data.day}
              data={data}
              date={date}
              monthIndex={monthIndex}
              setWorkingDay={setWorkingDay}
            />
          );
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
