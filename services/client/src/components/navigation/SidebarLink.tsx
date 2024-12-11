import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface SidebarLinkProps {
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  sidebarWidth: string;
  isActive: boolean;
  isSubMenu?: boolean;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon: Icon,
  label,
  sidebarWidth,
  isActive,
  isSubMenu = false, // Default to false if not passed
}) => {
  return (
    <Link
      to={to}
      className={classNames(
        "flex items-center space-x-3 p-2 rounded-md transition-colors duration-200 ease-in-out",
        {
          // Active parent menu color (Blue)
          "bg-blue-500 text-white hover:bg-blue-600": isActive && !isSubMenu,

          // Active submenu color (Green)
          "bg-green-600 text-white hover:bg-green-600": isActive && isSubMenu,

          // Inactive state with hover for parent (Light blue)
          "bg-transparent text-gray-700 hover:bg-blue-100 hover:text-blue-700":
            !isActive && !isSubMenu,

          // Inactive state with hover for submenu (Light green)
          "bg-transparent text-gray-700 hover:bg-green-100 hover:text-green-700":
            !isActive && isSubMenu,
        }
      )}
    >
      <Icon className="w-5 h-5" />
      {sidebarWidth !== "w-20" && <span>{label}</span>}
    </Link>
  );
};
