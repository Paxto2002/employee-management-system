import React, { useContext } from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTasks from "../other/AllTasks";
import Footer from "../other/Footer";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ onLogout, name, id }) => {
  const { userData } = useContext(AuthContext);
  const employees = userData?.employees || [];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
      <Header onLogout={onLogout} name={name} id={id} />

      <main className="flex-grow px-6 py-8">
        <CreateTask />
        <AllTasks employees={employees} />
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
