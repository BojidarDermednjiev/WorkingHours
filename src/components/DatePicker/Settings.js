import React from "react";
import { months } from "../../utils/helpers";
import { Button, Input } from "@material-tailwind/react";

export default function Settings({ state, dispatch }) {
  return (
    <section className="container mt-10">
      <h3 className="text-2xl">Настройки</h3>
      <section>
        {/* This way displaying for development purposes, maybe for now is not in use */}

        <div className="flex flex-col mt-10 lg:flex-row gap-x-10 gap-y-4">
            <div className="flex items-center justify-center gap-x-4">
              <Button size="sm" onClick={()=> dispatch({type: "change_per_work_days", payload: -1})}>
                <span className="text-xl">-</span>{" "}
              </Button>
              <div className="mb-6">
                <h2 className="text-lg font-bold">Per days working:</h2>
                <Input
                  label={"Per days working:"}
                  variant="outlined"
                  size="lg"
                  value={state.perWorkDays}
                  disabled
                />
              </div>
              <Button size="sm"  onClick={()=> dispatch({type: "change_per_work_days", payload: 1})}>
                <span className="text-xl">+</span>{" "}
              </Button>
            </div>
          <div>
            <h2 className="text-lg font-bold">Working day:</h2>
            {state.workingData.day}
          </div>
          <div>
            <h2 className="text-lg font-bold">Working Month:</h2>
            {months[state.workingData.month]}
          </div>
        </div>
      </section>
    </section>
  );
}
