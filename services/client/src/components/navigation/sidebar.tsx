import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoMdHome,
  IoMdListBox,
  IoMdPeople,
  IoMdFlask,
  IoMdSettings,
  IoMdLogOut,
} from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import instance from "../../config/axiosInstance";
import { deleteCookie } from "../../config/apiToken";

interface Project {
  id: number;
  name: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [sidebarWidth, setSidebarWidth] = useState<string>("w-20");
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
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
      console.error("Logout failed:", error);
    }
  };

  const handleExpand = () => {
    const newWidth =
      sidebarWidth === "w-20" || sidebarWidth === "w-20" ? "w-64" : "w-20";
    setSidebarWidth(newWidth);
    localStorage.setItem(
      "sidebarExpanded",
      JSON.stringify(newWidth === "w-64")
    );
  };

  return (
    <nav
      className={`bg-white text-gray-800 ${sidebarWidth} py-6 px-4 transition-all duration-300 ease-in-out space-y-6 border-r-2 border-gray-300`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-semibold text-gray-700">
          {sidebarWidth !== "w-20" && (
            <img src="/logo.png" alt="Logo" className="h-12 w-30" />
          )}
        </div>
        <button
          onClick={handleExpand}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          aria-label="Toggle Sidebar"
        >
          <MdKeyboardDoubleArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        <SidebarLink
          to="/"
          icon={IoMdHome}
          isActive={location.pathname === "/"}
          label="Home"
          sidebarWidth={sidebarWidth}
        />

        <div className="space-y-3">
          <SidebarLink
            to="/projects"
            icon={IoMdListBox}
            isActive={location.pathname.startsWith("/projects")}
            label="Projects"
            sidebarWidth={sidebarWidth}
          />
          <div className="ml-6 space-y-2">
            {projects.map((project) => (
              <SidebarLink
                key={project.id}
                to={`/projects/${project.id}`}
                icon={IoMdListBox}
                isActive={location.pathname === `/projects/${project.id}`}
                label={project.name}
                sidebarWidth={sidebarWidth}
              />
            ))}
            <SidebarLink
              to="/projects/add"
              icon={IoMdListBox}
              isActive={location.pathname === "/projects/add"}
              label="Add Project"
              sidebarWidth={sidebarWidth}
            />
          </div>
        </div>

        <SidebarLink
          to="/teams"
          icon={IoMdPeople}
          isActive={location.pathname === "/teams"}
          label="Teams"
          sidebarWidth={sidebarWidth}
        />
        <SidebarLink
          to="/tasks"
          icon={IoMdFlask}
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

      <div className="absolute bottom-0 left-0 right-0">
        <Link
          to="#"
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 p-3 text-gray-600  hover:text-blue-600 rounded-md ml-5"
          aria-label="Logout"
        >
          <IoMdLogOut className="w-6 h-6 center"  />
          {sidebarWidth !== "w-20" && (

            <span className="font-medium hover:font-semibold">Logout</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isActive: boolean;
  label: string;
  sidebarWidth: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon: Icon,
  isActive,
  label,
  sidebarWidth,
}) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 p-3 rounded-md transition-all duration-200 ease-in-out ${
      isActive
        ? "bg-blue-100 text-blue-600"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-500"
    }`}
  >
    <Icon className="w-6 h-6" />
    {sidebarWidth !== "w-20" && (
      <span className={`font-medium ${isActive ? "font-semibold" : ""}`}>
        {label}
      </span>
    )}
  </Link>
);

export default Sidebar;
