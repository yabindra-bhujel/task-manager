import React from "react"; 
import { IoMdListBox, IoMdAdd } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { SidebarLink } from "./SidebarLink";

interface ExpandableSectionProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: { id: number; name: string }[];
  basePath: string;
  sidebarWidth: string;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  icon: Icon,
  items,
  basePath,
  sidebarWidth,
}) => {
  const location = useLocation();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <SidebarLink
          to={basePath}
          icon={Icon}
          isActive={location.pathname.startsWith(basePath)}
          label={title}
          sidebarWidth={sidebarWidth}
        />
        {sidebarWidth !== "w-20" && (
          <button
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-transform"
            aria-label={`Create ${title}`}
          >
            <IoMdAdd className="w-6 h-6" />
          </button>
        )}
      </div>

      {sidebarWidth !== "w-20" && (
        <div className="ml-6 space-y-2">
          <div className="border-l-2 border-gray-300 pl-3">
            {items.map((item) => (
              <SidebarLink
                key={item.id}
                to={`${basePath}/${item.id}`}
                icon={IoMdListBox}
                isActive={location.pathname === `${basePath}/${item.id}`}
                label={item.name}
                sidebarWidth={sidebarWidth}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
