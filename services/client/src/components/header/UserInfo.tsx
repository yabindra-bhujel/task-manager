import React from "react";
import { useUser } from "../../provider/UserContext";
import { IoMdNotifications } from "react-icons/io";

const getInitials = (email: string) => {
  const nameParts = email.split("@")[0].split(" ");
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
  return initials || "U";
};

const getPersistentColor = (email: string) => {
  const colors = [
    "#FF5733", // orange
    "#33FF57", // green
    "#3357FF", // blue
    "#FF33A6", // pink
    "#FF8C00", // dark orange
    "#FFD700", // yellow
    "#8A2BE2", // blue violet
    "#20B2AA", // light sea green
  ];

  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = email.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash % colors.length);
  return colors[index];
};

export const UserInfo = () => {
  const { user } = useUser();

  const email = user?.email || "user@gmail.com";
  const initials = getInitials(email);
  const backgroundColor = getPersistentColor(email);

  return (
    <div className="flex items-center space-x-3 gap-3">
      <button className="">
        <IoMdNotifications className="w-6 h-6 text-gray-600" />
      </button>

      <div
        className="w-8 h-8 flex items-center justify-center rounded-full mr-5"
        style={{ backgroundColor }}
      >
        <span className="text-white font-semibold">{initials}</span>
      </div>
    </div>
  );
};
