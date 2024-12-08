import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaSpinner,
  FaStopCircle,
} from "react-icons/fa";

export const TaskOverview = () => {
  const [tasks, setTasks] = useState<{ id: number; status: string }[]>([]);

  useEffect(() => {
    const fetchedTasks = [
      { id: 1, status: "pending" },
      { id: 2, status: "completed" },
      { id: 3, status: "in_progress" },
      { id: 4, status: "stopped" },
      { id: 5, status: "completed" },
      { id: 6, status: "pending" },
    ];
    setTasks(fetchedTasks);
  }, []);

  const statusCounts = tasks.reduce(
    (counts, task) => {
      if (task.status === "pending") counts.pending++;
      if (task.status === "in_progress") counts.inProgress++;
      if (task.status === "completed") counts.completed++;
      if (task.status === "stopped") counts.stopped++;
      return counts;
    },
    { pending: 0, inProgress: 0, completed: 0, stopped: 0 }
  );

  const totalTasks = tasks.length;
  const completedPercentage = (
    (statusCounts.completed / totalTasks) *
    100
  ).toFixed(0);

  return (
    <div className="border p-5 rounded-lg w-full hover:border-blue-500 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg hover:border-blue-500 transition-all duration-300">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <FaClock className="mr-2 text-2xl" />
            Pending
          </h4>
          <p className="text-4xl font-semibold">{statusCounts.pending}</p>
          <p className="text-sm opacity-80">Tasks that are yet to start</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-lg hover:border-yellow-500 transition-all duration-300">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <FaSpinner className="mr-2 text-2xl" />
            In Progress
          </h4>
          <p className="text-4xl font-semibold">{statusCounts.inProgress}</p>
          <p className="text-sm opacity-80">Tasks currently being worked on</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg hover:border-green-500 transition-all duration-300">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <FaCheckCircle className="mr-2 text-2xl" />
            Completed
          </h4>
          <p className="text-4xl font-semibold">{statusCounts.completed}</p>
          <p className="text-sm opacity-80">Tasks that have been completed</p>
          <div className="mt-4">
            <span className="text-sm opacity-80 text-white">
              {completedPercentage}% completed
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-white h-2 rounded-full"
                style={{ width: `${completedPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-400 to-red-600 text-white p-6 rounded-lg hover:border-red-500 transition-all duration-300">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <FaStopCircle className="mr-2 text-2xl" />
            Stopped
          </h4>
          <p className="text-4xl font-semibold">{statusCounts.stopped}</p>
          <p className="text-sm opacity-80">Tasks that have been halted</p>
        </div>
      </div>
    </div>
  );
};
