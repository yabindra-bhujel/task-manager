import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Tasks } from "../type/projects/interfaces";

export const TaskCard = ({ task }: { task: Tasks }) => {
  return (
    <li className="bg-white border rounded-lg p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform">
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="mr-1" />
            {task.due_date}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">{task.description}</p>

        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              task.priority === "high"
                ? "bg-red-100 text-red-600"
                : task.priority === "medium"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {task.priority === "high" && (
              <BsFillExclamationCircleFill className="mr-1 inline-block" />
            )}
            {task.priority === "medium" && "Medium Priority"}
            {task.priority === "low" && "Low Priority"}
          </span>
        </div>
      </div>
    </li>
  );
};
