import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage if already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("loggedInUser");
      }
    }
    setIsLoading(false);
  }, []);

  // Handle login
  const handleLogin = (email, password) => {
    if (!userData) {
      alert("System not initialized yet. Please try again.");
      return false;
    }

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const adminUser = userData.admin?.find(
      (u) =>
        u.email.trim().toLowerCase() === trimmedEmail &&
        u.password === trimmedPassword
    );

    if (adminUser) {
      const userObj = { ...adminUser, role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(userObj));
      setUser(userObj);
      navigate("/dashboard");
      return true;
    }

    const employeeUser = userData.employees?.find(
      (e) =>
        e.email.trim().toLowerCase() === trimmedEmail &&
        e.password === trimmedPassword
    );

    if (employeeUser) {
      const userObj = { ...employeeUser, role: "employee" };
      localStorage.setItem("loggedInUser", JSON.stringify(userObj));
      setUser(userObj);
      navigate("/dashboard");
      return true;
    }

    return false;
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  // Route guard
  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center text-white text-lg bg-[#0f172a]">
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-4">
            <Login handleLogin={handleLogin} />
          </div>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {user?.role === "admin" ? (
              <AdminDashboard
                onLogout={handleLogout}
                name={user.name}
                id={user.id}
              />
            ) : (
              <EmployeeDashboard onLogout={handleLogout} employee={user} />
            )}
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={<Navigate to={user ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
};

export default App;
