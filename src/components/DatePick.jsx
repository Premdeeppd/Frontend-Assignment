import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const DatePick = ({ timeData, setTimeData }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);
  //   const [dateTime, setDateTime] = useState(timeData.startDate);
  //   const [dateTime2, setDateTime2] = useState(timeData.date);

  const handleDateTimeChange = (event) => {
    if (event) {
      //   setDateTime(event.getTime());
      setTimeData((prevTimeData) => ({
        ...prevTimeData,
        startDate: event.getTime(),
      }));
    }
  };

  const handleDateTimeChange2 = (event) => {
    if (event) {
      //   setDateTime2(event.getTime());
      setTimeData((prevTimeData) => ({
        ...prevTimeData,
        date: event.getTime(),
      }));
    }
  };

  return (
    <div className="flex items-center">
      <p
        className="mx-4 mr-2 text-gray-600 text-sm hover:text-black cursor-pointer"
        onClick={() => setShowPicker(!showPicker)}
      >
        {new Date(timeData.startDate).toLocaleDateString([], {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }) +
          " " +
          new Date(timeData.startDate).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
      </p>
      {showPicker && (
        <DateTimePicker
          onChange={handleDateTimeChange}
          value={new Date(timeData.startDate)}
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
        {new Date(timeData.date).toLocaleDateString([], {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }) +
          " " +
          new Date(timeData.date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
      </p>
      {showPicker2 && (
        <DateTimePicker
          onChange={handleDateTimeChange2}
          value={new Date(timeData.date)}
        />
      )}
    </div>
  );
};

export default DatePick;
