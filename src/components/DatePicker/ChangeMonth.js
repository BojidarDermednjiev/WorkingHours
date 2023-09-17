import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ChangeMonth({ changeMonth }) {
  return (
    <section className="flex items-center justify-between mx-5 mt-10 text-[#3995bd]   ">
      <div
        onClick={() => changeMonth(-1)}
        className="absolute left-0 flex items-center justify-center text-5xl cursor-pointer top-1/2"
      >
        <div className="">
          <IoIosArrowBack />
        </div>
      </div>
      <div
        onClick={() => changeMonth(1)}
        className="absolute right-0 flex items-center justify-center text-5xl cursor-pointer top-1/2"
      >
        <div className="">
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  );
}
