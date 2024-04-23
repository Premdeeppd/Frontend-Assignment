import React, { useEffect } from "react";
import { MimicMetrics } from "../mimic/api-mimic";
import { useState } from "react";
import "chartjs-adapter-moment";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      borderWidth: 2,
    },
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Memory Usage",
      align: "start",
      padding: 20,
      color: "#3E5680",
      font: {
        size: 15,
      },
    },
    legend: {
      display: true,
      position: "bottom",
      align: "start",
      labels: {
        color: "black",
        font: {
          weight: "bold",
        },
        usePointStyle: true,
        pointStyle: "rectRounded",
        padding: 20,
      },
    },
  },
  scales: {
    x: {
      type: "time",
      display: true,
      time: {
        unit: "second",
        displayFormats: {
          second: "HH:mm",
        },
      },
      grid: {
        color: "#E0ECFD",
      },
      border: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 10,
        minTicksLimit: 10,
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "right",
      ticks: {
        stepSize: 50,
        maxTicksLimit: 5,
      },
      grid: {
        color: "#E0ECFD",
      },
      border: {
        display: false,
      },
    },
  },
};

//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//   export const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         yAxisID: 'y',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         yAxisID: 'y1',
//       },
//     ],
//   };

const MemoryUses = ({ timeData }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    MimicMetrics.fetchMetrics({
      startTs: timeData.startDate,
      endTs: timeData.date,
    })
      .then((metrics) => {
        setData({
          labels: metrics[1].graphLines[0].values.map((item) => {
            // let date = new Date(item.timestamp);
            // let hours = date.getHours();
            // let minutes = date.getMinutes();

            // // Pad the hours and minutes with leading zeros if they are single digit
            // hours = hours < 10 ? "0" + hours : hours;
            // minutes = minutes < 10 ? "0" + minutes : minutes;

            // return `${hours}:${minutes}`;
            return item.timestamp;
          }),
          datasets: [
            {
              label: metrics[1].graphLines[2].name,
              data: metrics[1].graphLines[2].values.map((item) => item.value),
              borderColor: "#DC2626",
              backgroundColor: "#DC2626",
              tension: 0.2,
            },
            {
              label: metrics[1].graphLines[1].name,
              data: metrics[1].graphLines[1].values.map((item) => item.value),
              borderColor: "#2563EB",
              backgroundColor: "#2563EB",
              tension: 0.2,
            },
            {
              label: metrics[1].graphLines[0].name,
              data: metrics[1].graphLines[0].values.map((item) => item.value),
              borderColor: "#059669",
              backgroundColor: "#059669",
              yAxisID: "y",
              tension: 0.2,
            },
          ],
        });
        // console.log(metrics);
        console.log(Date.now());
      })
      .catch((error) => {
        console.error(error);
      });
  }, [timeData]);

  return (
    <div
      className="p-2 m-2 border rounded-lg"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#CEE0F8" }}
    >
      <Line options={options} data={data} />
    </div>
  );
};

export default MemoryUses;
