import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Navigation({ currMonthDisplay, year }) {
  return (
    <>
      <section className="flex items-center justify-center mb-10 -mt-10 gap-x-10">
        <CalendarDes />
        <CalendarDes />

        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />
        <CalendarDes />




      </section>
      <section class="flex justify-between text-[#3995bd] text-4xl container">
        <div className="flex items-center justify-center">
          <div className="text-[#90c7df]">
            <IoIosArrowBack />
          </div>
          <div className="mb-1">{currMonthDisplay} </div>
          <div className="text-[#90c7df]">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-[#90c7df]">
            <IoIosArrowBack />
          </div>
          <div className="mb-1">{year} </div>
          <div className="text-[#90c7df]">
            <IoIosArrowForward />
          </div>
        </div>
      </section>
    </>
  );
}

function CalendarDes() {
  return (
    <section className="relative">
      <div className="relative z-20 w-3 h-10 bg-orange-600 rounded-lg"></div>
      <div className="absolute z-10 w-5 h-5 -translate-x-1/2 bg-white rounded-full left-1/2 -bottom-2"></div>
    </section>
  );
}
