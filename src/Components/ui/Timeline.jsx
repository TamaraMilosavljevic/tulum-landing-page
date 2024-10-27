import React from "react";

const Calendar = () => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [
    { date: "1", isToday: false, isSelected: false },
    { date: "2", isToday: false, isSelected: false },
    { date: "3", isToday: false, isSelected: false },
    { date: "4", isToday: false, isSelected: false },
    { date: "5", isToday: false, isSelected: false },
    { date: "6", isToday: false, isSelected: false },
    { date: "7", isToday: true, isSelected: true },
    // Add more date objects as needed...
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full bg-white shadow p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              <time dateTime="2022-01-22">Jan 22, 2022</time>
              <time dateTime="2022-01-22" className="text-gray-500 ml-2">
                January 22, 2022
              </time>
            </h1>
            <p className="text-gray-600">Saturday</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Previous Day
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Today
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Next Day
            </button>
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl p-4">
        <div className="grid grid-cols-7 gap-2 text-center text-gray-700">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mt-4">
          {dates.map((date, index) => (
            <button
              key={index}
              className={`py-2 rounded ${
                date.isToday ? "bg-blue-100 text-blue-700" : "bg-gray-100"
              } ${date.isSelected && "border border-blue-500"}`}
            >
              {date.date}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add Event
          </button>
        </div>
      </main>
    </div>
  );
};

export default Calendar;
