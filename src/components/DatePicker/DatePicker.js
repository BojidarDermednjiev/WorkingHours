import { useEffect, useState } from "react";
import DisplayWorkingDays from "./DisplayWorkingDays";




function App() {
  const date = new Date();

  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [monthIndex, setMonthIndex] = useState(1);
  const currMonth = date.getMonth() + monthIndex
 const [displayWorkingDays, setDisplayWorkingDays] = useState({})
 const [workingDay, setWorkingDay] = useState({});

 

  const changeMonth = (num) => {
    setMonthIndex((prev) => (prev += num));
   
  };

  return (
    <div className="app">
      
      <DisplayWorkingDays
       date={date}
        monthIndex={monthIndex}
        currMonth={currMonth}
        currentYear={currentYear}
        displayWorkingDays={displayWorkingDays}
        setDisplayWorkingDays={setDisplayWorkingDays}
        changeMonth={changeMonth}
        workingDay={workingDay}
        setWorkingDay={setWorkingDay}
        
      />

     
    </div>
  );
}

export default App;
