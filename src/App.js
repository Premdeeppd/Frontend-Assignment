import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Log from "./pages/Log";
import Metrics from "./pages/Metrics";
import MatricGraph from "./components/MatricGraph";

export const TimeContext = createContext();

function App() {
  const [timeData, setTimeData] = useState({
    date: Date.now(),
    value: 5,
    startDate: Date.now() - 1000 * 60 * 5,
  });
  // console.log(Date.now());
  return (
    <TimeContext.Provider value={{ timeData, setTimeData }}>
      <Router>
        <div className="App">
          <NavBar setTimeData={setTimeData} />
          <Routes>
            <Route path="/logs" element={<Log />} />
            <Route path="/metrics" element={<Metrics />} />
          </Routes>
        </div>
      </Router>
    </TimeContext.Provider>
  );
}

export default App;
