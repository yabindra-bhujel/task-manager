import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoMdHome,
  IoMdPeople,
  IoMdSettings,
  IoMdLogOut,
} from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import instance from "../../config/axiosInstance";
import { deleteCookie } from "../../config/apiToken";
import { CiBoxList } from "react-icons/ci";
import { RiTaskLine } from "react-icons/ri";
import { SidebarLink } from "./SidebarLink";
import { ExpandableSection } from "./ExpandableSection";
interface Project {
  id: number;
  name: string;
}

interface Team {
  id: number;
  name: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [sidebarWidth, setSidebarWidth] = useState<string>("w-20");
  const [projects, setProjects] = useState<Project[]>([]);

  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: "Team 1" },
    { id: 2, name: "Team 2" },
    { id: 3, name: "Team 3" },
  ]);

  useEffect(() => {
    const savedExpandedState = localStorage.getItem("sidebarExpanded");
    if (savedExpandedState) {
      setSidebarWidth(JSON.parse(savedExpandedState) ? "w-64" : "w-20");
    }
  }, []);

  const handleLogout = async () => {
    try {
      await instance.post("/logout");
      deleteCookie("token");
      window.location.href = "/login";
    } catch (error) {
    }
  };

  const handleExpand = () => {
    const newWidth = sidebarWidth === "w-20" ? "w-64" : "w-20";
    setSidebarWidth(newWidth);
    localStorage.setItem(
      "sidebarExpanded",
      JSON.stringify(newWidth === "w-64")
    );
  };

  const handleAddProject = async () => {
    const name = prompt("Enter Project Name");
    if (name) {
      try {
        const response = await instance.post("/projects/create", { name });
        setProjects([...projects, response.data.project]);
      } catch (error) {
      }
    }
  }

  const getProjects = async () => {
    try {
      const response = await instance.get("/projects/list");
      setProjects(response.data.projects);
    } catch (error) {
    }
  }


  useEffect(() => {
    getProjects();
  }, []);

  return (
    <nav
      className={`bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 ${sidebarWidth} 
        py-6 px-4 transition-all duration-300 ease-in-out space-y-6 shadow-md border-r-2 border-gray-300`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-5">
        <div className="text-2xl font-semibold text-gray-700">
          {sidebarWidth !== "w-20" && (
            <img src="/logo.png" alt="Logo" className="h-10 w-30" />
          )}
        </div>
        <button
          onClick={handleExpand}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-300 transition-transform duration-200"
          aria-label="Toggle Sidebar"
        >
          <MdKeyboardDoubleArrowLeft
            className={`w-6 h-6 transform ${
              sidebarWidth === "w-20" ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="space-y-5">
        <SidebarLink
          to="/"
          icon={IoMdHome}
          isActive={location.pathname === "/"}
          label="Home"
          sidebarWidth={sidebarWidth}
        />

        {/* Projects Section */}
        <ExpandableSection
          title="Projects"
          icon={CiBoxList}
          items={projects}
          basePath="/projects"
          sidebarWidth={sidebarWidth}
          onAdd={() => handleAddProject()}
          onEdit={(id) => console.log(`Edit Project ${id}`)}
        />

        {/* Teams Section */}
        <ExpandableSection
          title="Teams"
          icon={IoMdPeople}
          items={teams}
          basePath="/teams"
          sidebarWidth={sidebarWidth}
          onAdd={() => console.log("Add Team")}
          onEdit={(id) => console.log(`Edit Team ${id}`)}
        />

        <SidebarLink
          to="/tasks"
          icon={RiTaskLine}
          isActive={location.pathname === "/tasks"}
          label="Tasks"
          sidebarWidth={sidebarWidth}
        />
        <SidebarLink
          to="/settings"
          icon={IoMdSettings}
          isActive={location.pathname === "/settings"}
          label="Settings"
          sidebarWidth={sidebarWidth}
        />
      </div>

      {/* Logout Section */}
      <div className="absolute bottom-0 left-0 right-0">
        <Link
          to="#"
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 p-3 text-gray-600 hover:text-red-600 rounded-md"
          aria-label="Logout"
        >
          <IoMdLogOut className="w-6 h-6 ml-4" />
          {sidebarWidth !== "w-20" && (
            <span className="font-medium hover:font-semibold">Logout</span>
          )}
        </Link>
      </div>
    </nav>
  );
};


export default Sidebar;
