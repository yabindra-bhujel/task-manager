import React from "react";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 ml-20 md:ml-64 transition-all duration-300 p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
