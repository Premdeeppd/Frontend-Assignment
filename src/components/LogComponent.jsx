import React, { useEffect, useState, useRef } from "react";
import { MimicLogs } from "../mimic/api-mimic";
import "./LogComponent.css";
import downArrow from "../assets/arrow-up-long.png";

const LogComponent = ({ timeData }) => {
  const [logs, setLogs] = useState([]);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);
  const [newLogsCount, setNewLogsCount] = useState(0);
  const bottomLogRef = useRef(null);
  const logContainerRef = useRef(null);

  useEffect(() => {
    const startTs = timeData.date - 1000 * 60 * timeData.value; // 5 min ago
    const endTs = timeData.date; // now
    const limit = 100; // maximum number of logs

    MimicLogs.fetchPreviousLogs({ startTs, endTs, limit })
      .then((data) => setLogs(data))
      .catch((error) => console.error(error));

    const unsubscribe = MimicLogs.subscribeToLiveLogs((newLog) => {
      if (!isScrolledToBottom) {
        setNewLogsCount((prevCount) => prevCount + 1);
      }
      setLogs((prevLogs) => [...prevLogs, newLog]);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [isScrolledToBottom]);

  useEffect(() => {
    // Scroll to bottom whenever logs change and user is scrolled to bottom
    if (isScrolledToBottom) {
      bottomLogRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, isScrolledToBottom, timeData]);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        logContainerRef.current.scrollHeight -
          logContainerRef.current.scrollTop ===
        logContainerRef.current.clientHeight;
      setIsScrolledToBottom(isBottom);
      if (isBottom) {
        setNewLogsCount(0);
      }
    };

    logContainerRef.current.addEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    bottomLogRef.current.scrollIntoView({ behavior: "smooth" });
    setNewLogsCount(0);
  };

  // const handleScroll = (e) => {
  //   const { scrollTop, scrollHeight, clientHeight } = e.target;
  //   const atBottom = scrollTop + clientHeight === scrollHeight;
  //   setIsScrolledToBottom(atBottom);
  // };

  return (
    <div
      className="log-component-hide-scrollbar"
      ref={logContainerRef}
      style={{ overflowY: "auto", overflowX: "auto", height: "100%" }}
    >
      {logs.map((log, index) => (
        <div key={index} style={{ whiteSpace: "nowrap" }}>
          <p style={{ color: "#A8C3E8" }}>
            <span style={{ color: "#5E7BAA" }}>
              {new Date(log.timestamp).toLocaleString()}
            </span>
            : {log.message}
          </p>
        </div>
      ))}
      <div style={{ position: "fixed", bottom: "60px", right: "40px" }}>
        {newLogsCount > 1 && (
          <button
            className="p-2 rounded-md"
            style={{
              backgroundColor: "#4338CA",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleButtonClick}
          >
            {newLogsCount} new logs
            <img src={downArrow} alt="down arrow" className="h-4 pl-2" />
          </button>
        )}
      </div>
      <div ref={bottomLogRef} /> {/* This will be scrolled into view */}
    </div>
  );
};

export default LogComponent;
