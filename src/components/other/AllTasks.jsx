import React, { useState, useContext, useEffect } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = ({ employees }) => {
  const { userData, setUserData } = useContext(AuthContext);
  const [confirmModal, setConfirmModal] = useState(null);
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    if (userData?.employees) {
      setAllEmployees(userData.employees);
    }
  }, [userData]);

  const handleDelete = (empIndex, taskIndex) => {
    const updatedEmployees = [...allEmployees];
    updatedEmployees[empIndex].tasks.splice(taskIndex, 1);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setUserData({ ...userData, employees: updatedEmployees });
    setAllEmployees(updatedEmployees);
    setConfirmModal(null);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">📋 All Assigned Tasks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allEmployees.map((emp, empIndex) =>
          emp.tasks.map((task, taskIndex) => (
            <div
              key={`${emp.id}-${taskIndex}`}
              className="bg-white/10 p-4 rounded-xl shadow-lg border border-white/10 relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold flex items-center gap-2 text-white">
                  <FaUser className="text-white/80" /> {emp.name}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full whitespace-nowrap">
                    ID: #{emp.id}
                  </span>

                  <button
                    onClick={() =>
                      setConfirmModal({
                        empIndex,
                        taskIndex,
                        name: emp.name,
                        id: emp.id,
                      })
                    }
                    className="text-red-500 hover:text-white hover:bg-red-600/20 p-2 rounded-full transition-all"
                    title="Delete Task"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>

              <p className="text-sm text-blue-300 font-semibold mb-1">
                {task.taskCategory}
              </p>
              <p className="text-lg font-bold mb-2 text-white">
                {task.taskDescription}
              </p>
              <p className="text-sm text-white/70 mb-1">
                Due: {task.taskDate}
              </p>

              {task.completed ? (
                <span className="text-green-400 text-sm font-semibold">
                  Completed
                </span>
              ) : task.inProgress ? (
                <span className="text-yellow-400 text-sm font-semibold">
                  In Progress
                </span>
              ) : task.overdue ? (
                <span className="text-red-400 text-sm font-semibold">
                  Overdue
                </span>
              ) : (
                <span className="text-blue-400 text-sm font-semibold">
                  New
                </span>
              )}
            </div>
          ))
        )}
      </div>

      {/* Confirm Delete Modal */}
      {confirmModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="bg-white text-black p-6 rounded-xl w-[90%] max-w-md text-center shadow-2xl">
            <h3 className="text-lg font-bold mb-4">
              Are you sure you want to delete this task for <br />
              <span className="text-blue-700">
                {confirmModal.name} (ID: {confirmModal.id})
              </span>
              ?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() =>
                  handleDelete(confirmModal.empIndex, confirmModal.taskIndex)
                }
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setConfirmModal(null)}
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded-lg shadow"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTasks;
