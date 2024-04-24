import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.svg";
import DropDowm from "./DropDown";
import "./NavBar.css";

const NavBar = ({ setTimeData }) => {
  return (
    // Your component's JSX code goes here
    <div>
      <nav className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img className="pr-4" src={logo} alt="logo" />
            <ul className="flex items-center">
              <li className="m-2">
                <NavLink
                  to="/metrics"
                  className="pb-1 flex items-center navlink hover:text-black border-b-2 border-transparent hover:border-blue-500 active:border-blue-500"
                  activeClassName="active"
                >
                  <img alt="Metrics icon" className="icon pr-2 h-4" />
                  Metrics
                </NavLink>
              </li>
              <li className="m-2">
                <NavLink
                  to="/logs"
                  className="pb-1 flex items-center navlink hover:text-black"
                  activeClassName="active"
                >
                  <img alt="List icon" className="listicon pr-2 h-3" />
                  Logs
                </NavLink>
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
