import React, { useEffect, useState, useRef } from 'react';
import { MimicLogs } from '../mimic/api-mimic';

const LogComponent = () => {
  const [logs, setLogs] = useState([]);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);
  const bottomLogRef = useRef(null);
  const logContainerRef = useRef(null);

  useEffect(() => {
    const startTs = Date.now() - 1000 * 60 * 5; // 5 min ago
    const endTs = Date.now(); // now
    const limit = 100; // maximum number of logs

    MimicLogs.fetchPreviousLogs({ startTs, endTs, limit })
      .then(data => setLogs(data))
      .catch(error => console.error(error));

    const unsubscribe = MimicLogs.subscribeToLiveLogs((newLog) => {
      setLogs((prevLogs) => [...prevLogs, newLog]);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever logs change and user is scrolled to bottom
    if (isScrolledToBottom) {
      bottomLogRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, isScrolledToBottom]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const atBottom = scrollTop + clientHeight === scrollHeight;
    setIsScrolledToBottom(atBottom);
  };

  return (
    <div onScroll={handleScroll} ref={logContainerRef} style={{ overflowY: 'auto', overflowX:'auto', height: '100%' }}>
            {logs.map((log, index) => (
        <div key={index} style={{ whiteSpace: 'nowrap' }} >
          <p>{new Date(log.timestamp).toLocaleString()}: {log.message}</p>
        </div>
      ))}
      <div ref={bottomLogRef} /> {/* This will be scrolled into view */}
    </div>
  );
};

export default LogComponent;