import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DatePick from "./DatePick";

const MatricsHead = ({ timeData, setTimeData }) => {
  //   const date = new Date(timeData.date);
  //   const formattedDate = date.toLocaleString("en-GB", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });
  //   const formattedTime = date.toLocaleString("en-GB", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  //   const data = `${formattedDate} ${formattedTime}`;

  //   const date2 = new Date(timeData.date - 1000 * 60 * timeData.value);
  //   const formattedDate2 = date2.toLocaleString("en-GB", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });
  //   const formattedTime2 = date2.toLocaleString("en-GB", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  //   const data2 = `${formattedDate2} ${formattedTime2}`;

  //   const [showPicker, setShowPicker] = useState(false);
  //   const [showPicker2, setShowPicker2] = useState(false);
  //   //   const [dateTime, setDateTime] = useState(timeData.startDate);
  //   //   const [dateTime2, setDateTime2] = useState(timeData.date);

  //   const handleDateTimeChange = (event) => {
  //     if (event) {
  //       //   setDateTime(event.getTime());
  //       setTimeData((prevTimeData) => ({
  //         ...prevTimeData,
  //         startDate: event.getTime(),
  //       }));
  //     }
  //   };

  //   const handleDateTimeChange2 = (event) => {
  //     if (event) {
  //       //   setDateTime2(event.getTime());
  //       setTimeData((prevTimeData) => ({
  //         ...prevTimeData,
  //         date: event.getTime(),
  //       }));
  //     }
  //   };

  return (
    <div
      className="p-2 border rounded-lg rounded-b-none border-b-0"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#CEE0F8" }}
    >
      <div className="flex items-center flex-col sm:flex-row">
        <h1 className="text-2xl font-bold">Metrics</h1>
        <DatePick timeData={timeData} setTimeData={setTimeData} />
      </div>
    </div>
  );
};

export default MatricsHead;
