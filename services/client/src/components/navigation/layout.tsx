import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1">
        {/* Sidebar with full height and background color */}
        <div className="w-32 text-white h-full bg-red-500">
          <Sidebar />
        </div>
        <div className="flex-1 p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
