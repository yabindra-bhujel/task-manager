import React, { useState } from "react";

interface Event {
  date: string;
  title: string;
  description: string;
  time?: string;
}

export const Calendar: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(today);

  const timelineData: Event[] = [
    {
      date: "2024-12-01",
      title: "Project Kickoff",
      description: "Project officially started.",
      time: "09:00",
    },
    {
      date: "2024-12-05",
      title: "Phase 1 Complete",
      description: "Initial phase of the project is done.",
      time: "14:00",
    },
    {
      date: "2024-12-10",
      title: "Testing Phase",
      description: "Starting the testing phase.",
      time: "11:00",
    },
    {
      date: "2024-12-15",
      title: "Project Launch",
      description: "Project will be launched.",
      time: "16:00",
    },
  ];

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const changeDate = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);
    setCurrentDate(newDate);
  };

  const currentDateString = formatDate(currentDate);
  const eventsForDay = timelineData.filter(
    (event) => event.date === currentDateString
  );

  const generateDayRange = (startDate: Date, numDays: number) => {
    const days = [];
    for (let i = 0; i < numDays; i++) {
      const nextDay = new Date(startDate);
      nextDay.setDate(startDate.getDate() + i);
      days.push(formatDate(nextDay));
    }
    return days;
  };

  const daysRange = generateDayRange(currentDate, 7);

  return (
    <div className="w-full h-screen bg-gray-100 p-6">
      <div className="w-full flex justify-between items-center mb-4">
        <button onClick={() => changeDate(-1)}>&lt; Prev</button>
        <h1 className="text-xl font-semibold">
          Current Date: {currentDateString}
        </h1>
        <button onClick={() => changeDate(1)}>Next &gt;</button>
      </div>

      {/* Horizontal Scrollable Dates */}
      <div className="w-full overflow-x-auto flex space-x-4 pb-4">
        {daysRange.map((day) => (
          <div
            key={day}
            className="flex-shrink-0 w-64 h-32 bg-blue-200 text-center py-2 rounded-lg flex flex-col justify-center items-center"
          >
            <span className="font-bold">{day}</span>
            {eventsForDay.map(
              (event) =>
                event.date === day && (
                  <div key={event.title} className="mt-2 text-sm">
                    <p>{event.title}</p>
                    <p>{event.time}</p>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
