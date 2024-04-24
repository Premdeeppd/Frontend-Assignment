import React from "react";
import Spinner from "../assets/Spinner.svg";

function LogsHeadLoad() {
  return (
    <div
      className="m-6 mb-0 mt-0 border rounded-lg rounded-b-none border-b-0"
      style={{ backgroundColor: "#0E1623", borderColor: "#0E1623" }}
    >
      <div className="flex items-center justify-center p-1">
        <img src={Spinner} alt="Metrics icon" className="pr-2 h-4" />
        <p className="font-mono text-sm" style={{ color: "#82A0CE" }}>
          Loading previous 100 logs
        </p>
      </div>
    </div>
  );
}

export default LogsHeadLoad;
