import React from "react";
import { MimicMetrics } from "../mimic/api-mimic";

const MatricGraph = () => {
  MimicMetrics.fetchMetrics({
    startTs: Date.now() - 1000 * 60 * 60,
    endTs: Date.now(),
  })
    .then((metrics) => {
      console.log(metrics);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div>
      <h1>MatricGraph</h1>
    </div>
  );
};

export default MatricGraph;
