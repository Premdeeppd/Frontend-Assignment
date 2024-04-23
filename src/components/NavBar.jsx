import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.svg";
import DropDowm from "./DropDown";
import metrix from "../assets/metrics-gray.png";
import list from "../assets/list.png";

const NavBar = ({ setTimeData }) => {
  return (
    // Your component's JSX code goes here
    <div>
      <nav className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img className="pr-4" src={logo} alt="logo" />
            <ul className="flex items-center">
              <li>
                <Link
                  to="/metrics"
                  className="p-2 flex items-center"
                  style={{ color: "#4B5563" }}
                >
                  <img src={metrix} alt="Metrics icon" className="pr-2 h-4" />
                  Metrics
                </Link>
              </li>
              <li>
                <Link
                  to="/logs"
                  className="p-2 flex items-center"
                  style={{ color: "#4B5563" }}
                >
                  <img src={list} alt="List icon" className="pr-2 h-3" />
                  Logs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <DropDowm setTimeData={setTimeData} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
