import React from "react";
import { useState, createContext } from "react";

const LoginContext = () => {
  const UserContext = createContext();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({ name: "Diksha" });
  return (
    <UserContext.Provider value={(user, isLoggedIn)}></UserContext.Provider>
  );
};

export default LoginContext;
