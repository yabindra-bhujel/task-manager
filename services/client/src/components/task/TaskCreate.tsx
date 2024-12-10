import React, { useState } from "react";
import { TaskStatus } from "../type/projects/enum";
import { CgCloseO } from "react-icons/cg";
import { Breadcrumbs } from "../header/Breadcrumbs";
import { TaskCreateProps } from "../type/projects/props";


export const CreateTask = ({ isOpen, onClose,
    handleSubmit,
    handleChange,
    errors,
    newTask
 }: TaskCreateProps) => {

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-end">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>

      {/* Modal content */}
      <div className="relative w-full sm:w-[600px] md:w-[700px] bg-white p-6 h-full pointer-events-auto">
        <div className="flex justify-between items-center mb-4">
          <Breadcrumbs
            crumbs={[
              { label: "Task", to: "/tasks" },
              { label: "New Task", to: "" },
            ]}
          />
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <CgCloseO size={24} />
          </button>
        </div>

        <form  className="space-y-4">
          {/* Task Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newTask.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter task title"
            />
            {errors?.title && (
              <span className="text-red-500 text-xs">{errors.title}</span>
            )}
          </div>

          {/* Task Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newTask.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter task description"
            />
            {errors?.description && (
              <span className="text-red-500 text-xs">{errors.description}</span>
            )}
          </div>

          {/* Due Date */}
          <div>
            <label
              htmlFor="due_date"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              type="date"
              id="due_date"
              name="due_date"
              value={newTask.due_date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors?.due_date && (
              <span className="text-red-500 text-xs">{errors.due_date}</span>
            )}
          </div>

          {/* Priority */}
          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={newTask.priority}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors?.priority && (
              <span className="text-red-500 text-xs">{errors.priority}</span>
            )}
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={newTask.status}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value={TaskStatus.PENDING}>Pending</option>
              <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
              <option value={TaskStatus.COMPLETED}>Completed</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
             onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
