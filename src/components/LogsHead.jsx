import React from "react";
import DatePick from "./DatePick";

function LogsHead({ timeData, setTimeData }) {
  return (
    <div
      className="m-2 mb-0 p-2 flex justify-end items-center flex-col sm:flex-row"
      style={{ height: "40px" }}
    >
      <p className=" text-gray-600 text-md">Showing logs for</p>
      <DatePick timeData={timeData} setTimeData={setTimeData} />
    </div>
  );
}

export default LogsHead;
