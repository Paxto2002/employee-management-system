import React, { useState } from "react";
import employeeImage from "../../assets/employee.jpg";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const isValid = handleLogin(trimmedEmail, trimmedPassword);

    if (!isValid) {
      setError("❌ Invalid email or password.");
    } else {
      setError("");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-xl pb-4">
        {/* Image */}
        <div className="h-56 w-full">
          <img
            src={employeeImage}
            alt="Employee"
            className="h-full w-full object-cover rounded-t-2xl"
          />
        </div>

        {/* Form */}
        <div className="p-6">
          <h2 className="text-center text-2xl font-semibold text-white mb-2 tracking-wide">
            Employee Login
          </h2>
          <p className="text-center text-sm text-gray-300 mb-6">
            Access your dashboard securely
          </p>

          {error && (
            <p className="text-red-400 text-sm mb-3 text-center font-semibold">
              {error}
            </p>
          )}

          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full rounded-md bg-white/80 border border-white/20 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full rounded-md bg-white/80 border border-white/20 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-semibold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-5"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
