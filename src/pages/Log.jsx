import React, { useContext } from "react";
import LogComponent from "../components/LogComponent";
import { TimeContext } from "../App";

const Log = () => {
  const { timeData } = useContext(TimeContext);
  return (
    <div
      className="m-6 p-3 rounded-lg "
      style={{ height: "80vh", overflowY: "auto", backgroundColor: "#090F17" }}
    >
      <LogComponent timeData={timeData} />
    </div>
  );
};

export default Log;
