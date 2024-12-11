import React from "react";
import { ProjectStatus } from "../type/projects/enum";
import { ProjectStatusDropdownProps } from "../type/projects/props";

export const ProjectStatusDropdown: React.FC<ProjectStatusDropdownProps> = ({
  status,
  handleStatusChange,
}) => {
  const statusOptions = [
    {
      value: ProjectStatus.PENDING,
      label: "Pending",
    },
    {
      value: ProjectStatus.IN_PROGRESS,
      label: "In Progress",
    },
    {
      value: ProjectStatus.COMPLETED,
      label: "Completed",
    },
    {
      value: ProjectStatus.STOPPED,
      label: "Stopped",
    },
  ];

  return (
    <select
      value={status}
      onChange={(e) => handleStatusChange(e.target.value as ProjectStatus)}
      className="text-sm font-semibold rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-400 bg-white"
    >
      {statusOptions.map((option) => (
        <option key={option.value} value={option.value}>
          <span className="flex items-center space-x-2">
            <span>{option.label}</span>
          </span>
        </option>
      ))}
    </select>
  );
};