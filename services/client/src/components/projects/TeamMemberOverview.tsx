import React from "react";

export const TeamMemberOverview = () => {
  const members = [
    {
      name: "John Doe",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Alice Johnson",
      role: "UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Bob Brown",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Charlie White",
      role: "DevOps Engineer",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Emily Green",
      role: "Product Designer",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-3 bg-gray-50 rounded-md shadow-md hover:bg-blue-100 hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-16 h-16 rounded-full border-2 border-blue-500 transition-transform transform hover:scale-110"
            />
            <div className="text-center">
              <p className="font-medium text-xs text-gray-800">{member.name}</p>
              <p className="text-xxs text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
