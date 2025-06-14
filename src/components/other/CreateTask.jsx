import React, { useState, useContext } from "react";
import { getFromStorage } from "../../utils/localStorage";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [message, setMessage] = useState("");

  const { userData, setUserData } = useContext(AuthContext);

  const resetForm = () => {
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const input = assignTo.trim().toLowerCase();
    const updatedEmployees = [...userData.employees];

    const employeeIndex = updatedEmployees.findIndex(
      (emp) =>
        emp.id.toLowerCase() === input ||
        emp.name.trim().toLowerCase() === input
    );

    if (employeeIndex === -1) {
      setMessage("❌ Employee not found! Please check ID or name.");
      return;
    }

    const newTask = {
      taskDescription,
      taskDate,
      taskCategory: category,
      newTask: true,
      inProgress: false,
      completed: false,
      overdue: false,
    };

    updatedEmployees[employeeIndex].tasks.push(newTask);

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setUserData({ ...userData, employees: updatedEmployees });

    setMessage(`✅ Task assigned to ${updatedEmployees[employeeIndex].name}`);
    resetForm();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📝 Create a New Task</h2>

      {message && (
        <p className="mb-4 px-4 py-2 rounded-md text-sm font-semibold bg-white/20 text-white">
          {message}
        </p>
      )}

      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-semibold">Task Title</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="input-style"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="input-style"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Assign To (ID or Name)
            </label>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="input-style"
              placeholder="e.g., emp-101 or Afzal Kasi"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-style"
              placeholder="Design, Backend, HR etc."
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              rows={10}
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Describe the task in detail..."
              className="input-style resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
