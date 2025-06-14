import React from "react";

const Header = ({ onLogout, name, id }) => {
  return (
    <header className="w-full bg-white/10 backdrop-blur-md border-b border-white/10 shadow-md px-6 py-4 flex items-end justify-between rounded-md">
      <h1 className="text-xl sm:text-2xl font-medium text-white leading-tight">
        Hello <br />
        <span className="text-2xl sm:text-3xl font-semibold text-white">
          {name ? `${id}: ${name}` : "User"} 👋🏻
        </span>
      </h1>

      <button
        onClick={onLogout}
        className="bg-red-600 text-white px-5 py-2 rounded-md font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
