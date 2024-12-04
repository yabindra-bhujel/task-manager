import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoMdHome,
  IoMdListBox,
  IoMdPeople,
  IoMdFlask,
  IoMdSettings,
  IoMdLogOut,
} from "react-icons/io";

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white text-gray-800 w-32 space-y-6 py-7 px-2 absolute md:relative md:block transition-all duration-200 border-l-2 border-gray-300 border-r-2 border-gray-300">
      <div className="space-y-2">
        <Link
          to="/"
          className={`flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md ${
            location.pathname === "/" ? "bg-gray-300" : ""
          }`}
        >
          <IoMdHome className="w-6 h-6" />
          <span className="ml-3 hidden md:block">Home</span>
        </Link>

        <Link
          to="/projects"
          className={`flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md ${
            location.pathname === "/projects" ? "bg-gray-300" : ""
          }`}
        >
          <IoMdListBox className="w-6 h-6" />
          <span className="ml-3 hidden md:block">Projects</span>
        </Link>

        <Link
          to="/teams"
          className={`flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md ${
            location.pathname === "/teams" ? "bg-gray-300" : ""
          }`}
        >
          <IoMdPeople className="w-6 h-6" />
          <span className="ml-3 hidden md:block">Teams</span>
        </Link>

        <Link
          to="/tasks"
          className={`flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md ${
            location.pathname === "/tasks" ? "bg-gray-300" : ""
          }`}
        >
          <IoMdFlask className="w-6 h-6" />
          <span className="ml-3 hidden md:block">Tasks</span>
        </Link>

        <Link
          to="/settings"
          className={`flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md ${
            location.pathname === "/settings" ? "bg-gray-300" : ""
          }`}
        >
          <IoMdSettings className="w-6 h-6" />
          <span className="ml-3 hidden md:block">Settings</span>
        </Link>

        
      </div>

      <div className="absolute bottom-0 left-0 right-0 md:relative md:static md:mt-4">
        <a
          href="#"
          className="flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md"
        >
          <IoMdLogOut className="w-6 h-6" />
          <span className="ml-3 hidden md:block">Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
