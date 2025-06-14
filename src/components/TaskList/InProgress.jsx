import React from "react";

const InProgress = ({ tasks }) => {
  const inProgressTasks = tasks.filter((task) => task.inProgress);

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">⏳ In Progress</h2>

      {inProgressTasks.length === 0 ? (
        <p className="text-center text-yellow-300 animate-pulse">No tasks in progress 🚀</p>
      ) : (
        <div className="flex gap-6 overflow-x-auto px-2">
          {inProgressTasks.map((task, index) => (
            <div
              key={index}
              className="min-w-[350px] h-[220px] rounded-2xl bg-white/10 backdrop-blur-md text-white p-6 shadow-xl border border-white/10 flex flex-col justify-between hover:scale-[1.02] transition-transform"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">📋 Task {index + 1}</h3>
                  <span className="text-sm">{task.taskDate}</span>
                </div>
                <p className="text-sm mb-3 text-white/90">{task.taskDescription}</p>
                <span className="text-xs bg-white/10 px-3 py-1 border border-white/20 rounded-full">
                  {task.taskCategory}
                </span>
              </div>
              <div className="h-1 mt-4 rounded-full bg-yellow-500" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default InProgress;
