import React, { useContext } from "react";
import LogComponent from "../components/LogComponent";
import { TimeContext } from "../App";
import LogsHead from "../components/LogsHead";
import LogsHeadLoad from "../components/LogsHeadLoad";

const Log = () => {
  const { timeData } = useContext(TimeContext);
  const { setTimeData } = useContext(TimeContext);
  return (
    <div>
      <LogsHead timeData={timeData} setTimeData={setTimeData} />
      <LogsHeadLoad />
      <div
        className="m-6 mt-0 p-3 pt-1 rounded-lg rounded-t-none "
        style={{
          height: "75vh",
          overflowY: "auto",
          backgroundColor: "#090F17",
        }}
      >
        <LogComponent timeData={timeData} />
      </div>
    </div>
  );
};

export default Log;
