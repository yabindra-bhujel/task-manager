import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Topbar = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 bg-white shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-semibold text-gray-700">
        <img src="/logo.png" alt="Logo" className="h-12 w-30" />
      </div>

      {/* Right-side Section: Notifications and User Info */}
      <div className="flex items-center space-x-6">
        {/* Notifications Icon */}
        <div className="relative">
          <IoMdNotificationsOutline className="w-6 h-6 text-gray-700" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        {/* User Avatar and Name */}
        <div className="flex items-center space-x-2">
          <img
            className="h-8 w-8 rounded-full"
            src="https://www.gravatar.com/avatar/7d9bca0ef9eb4f4adfd7584a3f3f5127"
            alt="User Avatar"
          />
          <span className="text-gray-700 font-semibold">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
