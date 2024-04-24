import React, { useState, createContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Log from "./pages/Log";
import Metrics from "./pages/Metrics";

export const TimeContext = createContext();

function Main() {
  const [timeData, setTimeData] = useState({
    date: Date.now(),
    value: 5,
    startDate: Date.now() - 1000 * 60 * 5,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({
      date: String(timeData.date),
      value: String(timeData.value),
      startDate: String(timeData.startDate),
    });
  }, [timeData, setSearchParams]);

  return (
    <TimeContext.Provider value={{ timeData, setTimeData }}>
      <div className="App">
        <NavBar setTimeData={setTimeData} />
        <Routes>
          <Route path="/logs" element={<Log />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </div>
    </TimeContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
