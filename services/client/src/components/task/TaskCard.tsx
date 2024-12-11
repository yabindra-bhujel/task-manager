import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Tasks } from "../type/projects/interfaces";
import { FcNext } from "react-icons/fc";

export const TaskCard = ({
  task,
  updateTaskStatu,
}: {
  task: Tasks;
  updateTaskStatu: (id: number) => void;
}) => {
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
            {task?.priority === "medium" && "Medium Priority"}
            {task?.priority === "low" && "Low Priority"}
          </span>
        </div>

        <div className="flex justify-end items-center">
          {task.status === "pending" || task.status === "in_progress" ? (
            <button
            onClick={() => updateTaskStatu(task.id)}
              className={`px-2 py-1 rounded-xl ${
                task.status === "pending"
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : task.status === "in_progress"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : ""
              }`}
            >
              <FcNext className="inline-block" size={25} />
            </button>
          ) : null}
        </div>
      </div>
    </li>
  );
};

export const NoTask = ({ message }: { message: string }) => {
  return (
    <div className="bg-white border rounded-lg p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform">
      <span className="text-gray-500">{message}</span>
    </div>
  );
};
