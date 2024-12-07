import React from "react";
import { Link } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isActive: boolean;
  label: string;
  sidebarWidth: string;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
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
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-200 hover:text-blue-500"
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
