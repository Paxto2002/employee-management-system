import React, { useState, useEffect, createContext } from "react";
import { getFromStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Initialize data if not present
    const localData = getFromStorage();
    if (!localData.employees.length) setLocalStorage();
    const { employees, admin } = getFromStorage();
    setUserData({ employees, admin });
  }, []);

  useEffect(() => {
    // Sync across tabs when localStorage changes
    const handleStorageChange = (e) => {
      if (e.key === "employees" || e.key === "admin") {
        const updatedData = getFromStorage();
        setUserData(updatedData);
        console.log("🌀 Synced localStorage changes across tabs");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
