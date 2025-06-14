import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import Footer from "../other/Footer";

const countTasks = (tasks) => ({
  newTask: tasks.filter((t) => t.newTask).length,
  inProgress: tasks.filter((t) => t.inProgress).length,
  completed: tasks.filter((t) => t.completed).length,
  overdue: tasks.filter((t) => t.overdue).length,
});

const EmployeeDashboard = ({ onLogout, employee }) => {
  const taskCount = countTasks(employee.tasks);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
      <Header onLogout={onLogout} name={employee.name} id={employee.id} />

      <main className="flex-grow px-6 py-8">
        <TaskListNumbers data={taskCount} />
        <TaskList tasks={employee.tasks} />
      </main>

      <Footer />
    </div>
  );
};

export default EmployeeDashboard;
