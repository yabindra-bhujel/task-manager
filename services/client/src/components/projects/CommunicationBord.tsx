import React, { useState } from "react";

export const CommunicationBoard = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      content: "Welcome to the Communication Board!",
      sendTime: "2024-12-08 12:34:56",
    },
    {
      id: 2,
      sender: "Jane Smith",
      content: "New updates will be posted here.",
      sendTime: "2024-12-08 13:15:10",
    },
    {
      id: 3,
      sender: "Alice Johnson",
      content: "Make sure to check out the latest announcements.",
      sendTime: "2024-12-08 14:00:20",
    },
    {
      id: 4,
      sender: "Bob Lee",
      content: "Feel free to share your feedback.",
      sendTime: "2024-12-08 14:30:45",
    },
    {
      id: 5,
      sender: "Charlie Brown",
      content: "This is the place for important updates.",
      sendTime: "2024-12-08 15:00:10",
    },
    // Add more messages as needed
  ]);

  return (
     <div>
        <h1>hha</h1>
     </div>
  );
};
