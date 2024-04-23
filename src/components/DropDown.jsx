import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDowm({ setTimeData }) {
  const [selected, setSelected] = useState("Last 5 minutes");
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selected}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  // to="/metrics"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => {
                    setSelected("Last 5 minutes");
                    setTimeData({
                      date: Date.now(),
                      value: 5,
                      startDate: Date.now() - 1000 * 60 * 5,
                    });
                  }}
                >
                  Last 5 minutes
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  // to="/metrics"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => {
                    setSelected("Last 15 minutes");
                    setTimeData({
                      date: Date.now(),
                      value: 15,
                      startDate: Date.now() - 1000 * 60 * 15,
                    });
                  }}
                >
                  Last 15 minutes
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  // to="/metrics"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => {
                    setSelected("Last 30 minutes");
                    setTimeData({
                      date: Date.now(),
                      value: 30,
                      startDate: Date.now() - 1000 * 60 * 30,
                    });
                  }}
                >
                  Last 30 minutes
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  // to="/metrics"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => {
                    setSelected("Last 1 hour");
                    setTimeData({
                      date: Date.now(),
                      value: 60,
                      startDate: Date.now() - 1000 * 60 * 60,
                    });
                  }}
                >
                  Last 1 hour
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  // to="/metrics"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => {
                    setSelected("Last 3 hour");
                    setTimeData({
                      date: Date.now(),
                      value: 180,
                      startDate: Date.now() - 1000 * 60 * 180,
                    });
                  }}
                >
                  Last 3 hour
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  // to="/metrics"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => {
                    setSelected("Last 6 hour");
                    setTimeData({
                      date: Date.now(),
                      value: 360,
                      startDate: Date.now() - 1000 * 60 * 360,
                    });
                  }}
                >
                  Last 6 hour
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
