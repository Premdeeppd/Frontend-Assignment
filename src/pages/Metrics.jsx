import React, { useContext } from "react";
import MatricGraph from "../components/MatricGraph";
import CpuUses from "../components/CpuUses";
import MemoryUses from "../components/MemoryUses";
import NetworkUses from "../components/NetworkUses";
import DiscIops from "../components/DiscIops";
import MatricsHead from "../components/MatricsHead";
import { TimeContext } from "../App";

const Metrics = () => {
  const { timeData } = useContext(TimeContext);
  const { setTimeData } = useContext(TimeContext);
  return (
    <div className="p-6" style={{ backgroundColor: "#FAFCFF" }}>
      <MatricsHead timeData={timeData} setTimeData={setTimeData} />
      <div
        className="p-2 border rounded-lg rounded-t-none"
        style={{ backgroundColor: "#F0F7FF80", borderColor: "#CEE0F8" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <CpuUses timeData={timeData} />
          <MemoryUses timeData={timeData} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <NetworkUses timeData={timeData} />
          <DiscIops timeData={timeData} />
        </div>

        {/* <MatricGraph /> */}
      </div>
    </div>
  );
};

export default Metrics;
