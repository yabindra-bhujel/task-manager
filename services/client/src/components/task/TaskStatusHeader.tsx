import React from "react";
export const TaskStatusHeader = ({
  status,
  icon: Icon,
}: {
  status: string;
  icon: React.ElementType;
}) => {
  const statusColors: { [key: string]: string } = {
    pending: "text-blue-600",
    "in-progress": "text-yellow-600",
    completed: "text-green-600",
  };

  const statusBgColors: { [key: string]: string } = {
    pending: "bg-blue-50",
    "in-progress": "bg-yellow-50",
    completed: "bg-green-50",
  };

  const statusText = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div
      className={`flex items-center mb-6 p-4 rounded-lg ${statusBgColors[status]} transition-all duration-200 ease-in-out transform hover:scale-105`}
    >
      <Icon
        className={`text-3xl mr-3 ${statusColors[status]} transition-all duration-200`}
      />
      <h2
        className={`text-xl font-semibold ${statusColors[status]} transition-all duration-200`}
      >
        {statusText}
      </h2>
    </div>
  );
};
