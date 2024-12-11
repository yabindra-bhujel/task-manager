import React from "react";
import { IoMdListBox, IoMdAdd } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { SidebarLink } from "./SidebarLink";
import { FaAngleDown } from "react-icons/fa";


interface ExpandableSectionProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: { id: number; name: string }[];
  basePath: string;
  sidebarWidth: string;

  onAdd: () => void;
  onEdit: (id: number) => void;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  icon: Icon,
  items,
  basePath,
  sidebarWidth,
  onAdd,
  onEdit,
}) => {
  const location = useLocation();

  const isParentActive = location.pathname.startsWith(basePath);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        {/* Parent (Project) Link */}
        <SidebarLink
          to={basePath}
          icon={Icon}
          isActive={isParentActive}
          label={title}
          sidebarWidth={sidebarWidth}
        />
        {sidebarWidth !== "w-20" && (
          <button
            onClick={onAdd}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-transform"
            aria-label={`Create ${title}`}
          >
            <IoMdAdd className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Submenu Links */}
      {sidebarWidth !== "w-20" && items?.length > 0 && (
        <div className="ml-6 space-y-2">
          <div className="border-l-2 border-gray-300 pl-3">
            {items.map((item) => {
              // Check if the current item (submenu) is active
              const isSubmenuActive =
                location.pathname === `${basePath}/${item.id}`;

              return (
                <SidebarLink
                  key={item.id}
                  to={`${basePath}/${item.id}`}
                  icon={IoMdListBox}
                  label={item.name}
                  sidebarWidth={sidebarWidth}
                  isActive={isSubmenuActive} // Pass active state for submenu
                  isSubMenu={true} // Indicate that this is a submenu
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
