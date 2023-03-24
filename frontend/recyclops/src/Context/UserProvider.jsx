import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebaseConfig";
import PropTypes from "prop-types";
export const UserContext = createContext();
export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const userListener = auth.onAuthStateChanged(async (user) => {
      if (user == null) {
        setUser(null);
      } else {
        const { displayName, email, photoURL, uid } = user;

        setUser({
          displayName,
          email,
          photoURL,
          uid,
        });
      }
    });
    return userListener;
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
UserProvider.propTypes = {
  children: PropTypes.any,
};
