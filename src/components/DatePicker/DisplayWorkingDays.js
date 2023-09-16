import React, { useMemo, useState } from "react";

import { allAreEqual, dateFormatDay, days } from "../../utils/helpers";
import Day from "./Day";

export default function DisplayWorkingDays({
  state,
  dispatch,
  currMonth,
  daysInCurrentMonth,
  currMonthDisplay,
  changeMonth,
date,
}) {
  useMemo(() => {
    try {
      const arr = [];

      // Skipping days
      let workingDays = 0;
      let restDays = 0;

      for (let i = 0; i < daysInCurrentMonth.length; i++) {
        const dayDate = new Date(state.currentYear, currMonth - 1, i + 1).getDay();

        // Setting up data for display
        const data = {
          isWorking: false,
          day: i + 1,
          weekOfTheDay: dateFormatDay[dayDate],
        };

        // Skipping days if they are not set
        if (!state.workingData.day || !state.workingData.month) {
          data.isWorking = null;
          arr.push(data);
          continue;
        }

        // !----- Next Month ------!
        if (state.workingData.month != currMonthDisplay && i == 0) {
          /*
          Only days must be setup, and getted from last month. 
          Besides that the logic stays the same
          */

          // Getting prev Month data
          console.log(state.monthIndex);
          const prevMonth = state.displayWorkingDays[state.monthIndex - 1];

          // Last two days from last month
          const lastDays = prevMonth.days
            .slice(-state.perWorkDays)
            // And formating to true and false values
            .map((day) => day.isWorking);

          // Cheching if the values are all the same
          if (allAreEqual(lastDays)) {
            if (lastDays[0]) {
              restDays = state.perWorkDays;
            } else {
              workingDays = state.perWorkDays;
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
            const cond = state.perWorkDays - skipTimes;
            // And setting the loop
            type ? (workingDays = cond) : (restDays = cond);
          }
        }
        // !----- Curr month ------!

        // RestDays
        if (restDays > 0) {
          arr.push(data);

          restDays--;
          if (state.workingData.month != currMonthDisplay && restDays == 0) {
            workingDays = state.perWorkDays;
          }
          continue;
        }
        // WorkingDays
        if (workingDays > 0) {
          data.isWorking = true;
          arr.push(data);
          workingDays--;
          if (workingDays == 0) {
            restDays = state.perWorkDays;
          }
          continue;
        }
        // If working day is set
        if (
          state.workingData.day <= i + 1 &&
          state.workingData?.month == currMonthDisplay
        ) {
          data.isWorking = true;
          workingDays = state.perWorkDays - 1;
          arr.push(data);
          // Days before the chosen day
        } else {
          data.isWorking = null;
          arr.push(data);
          continue;
        }
      }

      // This must be dispatch
      const action = {
        type: "add_working_days",
        payload: arr

      }
      dispatch(action)
     
    } catch (e) {
      console.log(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.monthIndex, state.workingData]);

  if (!state.displayWorkingDays[state.monthIndex]?.days[0]) {
    return <div>Loading...</div>;
  }
  const emptyDivs = Array?.apply(
    null,
    Array(days?.indexOf(state.displayWorkingDays[state.monthIndex]?.days[0]?.weekOfTheDay))
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

        {/* Creating empty divs from last month, to properly display the days */}
        {emptyDivs?.map((emptyDiv, index) => {
          return <div key={index}></div>;
        })}
        {state.displayWorkingDays[state.monthIndex]?.days?.map((data) => {
          return (
            <Day
              key={data.day}
              data={data}
              date={date}
              state={state}
              monthIndex={state.monthIndex}
              dispatch={dispatch}
            />
          );
        })}
      </div>

    {/* This way displaying for development purposes, maybe for now is not in use */}
      <div className="flex flex-col mt-10 lg:flex-row gap-x-10 gap-y-4">
        <div>
          <h2 className="text-lg font-bold">Working day:</h2>
          {state.workingData.day}
        </div>
        <div>
          <h2 className="text-lg font-bold">Working Month:</h2>
          {state.workingData.month}
        </div>
        <div>
          <h2 className="text-lg font-bold">Current month:</h2>
          {currMonthDisplay}
        </div>
      </div>
    </>
  );
}


  