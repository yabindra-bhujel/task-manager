import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Breadcrumbs } from "../header/Breadcrumbs";
import instance from "../../config/axiosInstance";
import { useParams } from "react-router-dom";
import { ProjectInterface } from "../type/projects/interfaces";


interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectInterface | null;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, project }) => {
  const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({
    name: "",
    start_date: "",
    end_date: "",
    assigned_to: "",
    description: "",
    project_id: "",
  });

  if (!isOpen) return null;

  const breadcrumbs = [
    { label: "Projects", to: "/projects" },
    { label: project ? project.name : "Project", to: "/projects/1" },
    { label: "New Task", to: "/projects/1/tasks" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        if (id) {
          formData.project_id = id;
        } else {
          throw new Error("Project ID is undefined");
        }
      const response = await instance.post("tasks/create", formData);
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-60 flex items-center justify-center transition-opacity duration-300 rounded-md">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-screen p-6 animate__animated animate__fadeIn animate__faster">
        <Breadcrumbs crumbs={breadcrumbs} />
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">New Task</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            <IoClose />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter task name"
            />
          </div>

          <div className="mb-6 flex justify-between space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Start Date
              </label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-b-2 focus:border-b-blue-500"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                End Date
              </label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-b-2 focus:border-b-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Assigned To
            </label>
            <input
              type="text"
              name="assigned_to"
              value={formData.assigned_to}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Assign a team member"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task description"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md text-sm font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md text-sm font-semibold hover:bg-blue-600 transition"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
