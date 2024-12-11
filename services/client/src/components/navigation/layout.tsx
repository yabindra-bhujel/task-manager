import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";

const useSidebarWidth = (): string => {
  const [sidebarWidth, setSidebarWidth] = useState<string>("w-20");

  useEffect(() => {
    const savedExpandedState = localStorage.getItem("sidebarExpanded");
    if (savedExpandedState) {
      setSidebarWidth(JSON.parse(savedExpandedState) ? "w-64" : "w-20");
    }
  }, []);

  return sidebarWidth;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarWidth = useSidebarWidth();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div
        className={`flex-1 ${
          sidebarWidth === "w-20" ? "" : ""
        } transition-all duration-300 p-3`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
