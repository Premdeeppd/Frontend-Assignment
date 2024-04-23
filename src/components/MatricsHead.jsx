import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const MatricsHead = ({ timeData, setTimeData }) => {
  const date = new Date(timeData.date);
  const formattedDate = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime = date.toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const data = `${formattedDate} ${formattedTime}`;

  const date2 = new Date(timeData.date - 1000 * 60 * timeData.value);
  const formattedDate2 = date2.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime2 = date2.toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const data2 = `${formattedDate2} ${formattedTime2}`;

  const [showPicker, setShowPicker] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);
  const [dateTime, setDateTime] = useState(timeData.startDate);
  const [dateTime2, setDateTime2] = useState(timeData.date);

  const handleDateTimeChange = (event) => {
    setDateTime(event.getTime());
    setTimeData((prevTimeData) => ({
      ...prevTimeData,
      startDate: event.getTime(),
    }));
  };

  const handleDateTimeChange2 = (event) => {
    setDateTime2(event.getTime());
    setTimeData((prevTimeData) => ({
      ...prevTimeData,
      date: event.getTime(),
    }));
  };

  return (
    <div
      className="p-2 border rounded-lg rounded-b-none border-b-0"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#CEE0F8" }}
    >
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Metrics</h1>
        <p
          className="mx-4 mr-2 text-gray-600 text-sm hover:text-black cursor-pointer"
          onClick={() => setShowPicker(!showPicker)}
        >
          {data2}
        </p>
        {showPicker && (
          <DateTimePicker
            onChange={handleDateTimeChange}
            value={new Date(dateTime)}
          />
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>

        <p
          className="mx-4 ml-0 text-gray-600 text-sm hover:text-black cursor-pointer"
          onClick={() => setShowPicker2(!showPicker2)}
        >
          {data}
        </p>
        {showPicker2 && (
          <DateTimePicker
            onChange={handleDateTimeChange2}
            value={new Date(dateTime2)}
          />
        )}
      </div>
    </div>
  );
};

export default MatricsHead;
