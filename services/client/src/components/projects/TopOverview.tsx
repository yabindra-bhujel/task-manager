import React from 'react';
import { ProjectStatusDropdown } from './ProjectStatusDropdown';
import { ProjectStatus } from '../type/projects/enum';
import { MdModeEdit } from "react-icons/md";

interface OverviewProps {
    project: any;
    isEditing: boolean;
    status: string;
    handleEdit: any;
    handleStatusChange: any;
}

export const TopOverview = (
    { project, isEditing, status, handleEdit, handleStatusChange }: OverviewProps
) => {
    return (
      <section
        className={`border pb-4 p-4 bg-white rounded-lg w-full ${
          isEditing ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <div className="flex justify-between mb-2">
          <div>
            {isEditing ? (
              <input
                type="text"
                value={project?.name}
                className={`text-xl font-semibold text-gray-800 bg-transparent focus:outline-none ${
                  isEditing ? "focus:border-b-2 focus:border-blue-500" : ""
                }`}
                onChange={(e) => {
                  if (project) {
                    project.name = e.target.value;
                  }
                }}
              />
            ) : (
              <h3 className="text-xl font-semibold text-gray-800">
                {project?.name}
              </h3>
            )}
          </div>

          <button
            className={`w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-500 transition-all duration-300 ease-in-out ${
              isEditing ? "bg-gray-500" : "bg-white"
            }`}
            onClick={handleEdit}
          >
            <MdModeEdit className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500 mt-1">
              {project?.description ||
                "No description available for this project."}
            </p>
          </div>

          <div>
            {isEditing && project ? (
              <ProjectStatusDropdown
                status={status as ProjectStatus}
                handleStatusChange={handleStatusChange}
              />
            ) : (
              <div
                className={`px-3 py-1 text-xs font-semibold rounded-xl text-white shadow-md transition-all duration-300 ease-in-out`}
                style={{
                  background:
                    status === ProjectStatus.PENDING
                      ? "#fb923c" // Light orange
                      : status === ProjectStatus.IN_PROGRESS
                      ? "#3b82f6" // Light blue
                      : status === ProjectStatus.COMPLETED
                      ? "#10b981" // Light green
                      : "#6b7280", // Gray
                }}
              >
                {status}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-500">Start Date</p>
            <p className="font-semibold text-gray-800">{project?.start_date}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">End Date</p>
            <p className="font-semibold text-gray-800">{project?.end_date}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Team</p>
            <p className="font-semibold text-gray-800">
              {project?.team_id ? `Team ${project.team_id}` : "Not assigned"}
            </p>
          </div>
        </div>
      </section>
    );
}