import React, { useState, useEffect, createContext } from "react";
import { auth } from "../config";
import PropTypes from "prop-types";
export const UserContext = createContext({ user: null });
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const { displayName, email, photoURL } = user;

      setUser({
        displayName,
        email,
        photoURL,
      });
    });
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
UserProvider.propTypes = {
  children: PropTypes.any,
};
