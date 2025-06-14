import React from "react";

const TaskListNumbers = ({ data }) => {
  const cards = [
    { label: "New Tasks", color: "bg-blue-500", emoji: "🆕", key: "newTask" },
    { label: "In Progress", color: "bg-yellow-500", emoji: "⏳", key: "inProgress" },
    { label: "Completed", color: "bg-green-500", emoji: "✅", key: "completed" },
    { label: "Overdue", color: "bg-red-500", emoji: "⚠️", key: "overdue" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative rounded-2xl p-6 text-white shadow-xl transition hover:scale-[1.02] hover:shadow-2xl backdrop-blur-md bg-white/10 border border-white/10"
        >
          <div className="text-4xl absolute top-4 right-5">{card.emoji}</div>

          {/* ✅ Dynamically pull correct count */}
          <h2 className="text-4xl font-extrabold mb-2">
            {data[card.key] ?? 0}
          </h2>

          <h3 className="text-lg font-medium">{card.label}</h3>
          <div className={`mt-6 h-1 w-full rounded-full ${card.color}`}></div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
