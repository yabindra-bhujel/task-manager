import React, { useState, useRef } from "react";
import { MenuItems } from "../type/projects/enum";
import { ProjectHeaderProps } from "../type/projects/props";
import TaskModal from "./TaskModel";

export const ProjectHeader = ({
  handleMenuItemChange,
  activeMenu,
  project,
}: ProjectHeaderProps) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });

  const addTaskButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleAddTaskClick = () => {
    if (addTaskButtonRef.current) {
      const buttonRect = addTaskButtonRef.current.getBoundingClientRect();
      setModalPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }

    setIsTaskModalOpen(true);
  };

  const handleCloseTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center border-b">
      <ul className="flex space-x-4 pb-2">
        {Object.values(MenuItems).map((item) => (
          <li
            key={item}
            onClick={() => handleMenuItemChange(item)}
            className={`cursor-pointer px-4 py-2 text-sm font-semibold ${
              activeMenu === item
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4 pb-2">
        <div className="flex items-center space-x-4">
          <button
            ref={addTaskButtonRef}
            onClick={handleAddTaskClick}
            className="bg-white text-gray-800 font-semibold py-1 px-3 text-sm border border-gray-400 rounded shadow-sm hover:bg-gray-100 hover:text-blue-500 hover:shadow-md transition duration-200 ease-in-out"
          >
            Add Task
          </button>
          <button className="bg-white text-gray-800 font-semibold py-1 px-3 text-sm border border-gray-400 rounded shadow-sm hover:bg-gray-100 hover:text-blue-500 hover:shadow-md transition duration-200 ease-in-out">
            Add Member
          </button>
        </div>
      </div>

      {/* TaskModal component */}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={handleCloseTaskModal}
        project={project}
      />
    </div>
  );
};
