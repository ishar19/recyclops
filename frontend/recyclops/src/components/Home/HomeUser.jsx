import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
// import userData from "../../mock/user.json";
// import { useEffect } from "react";
// import { useState } from "react";
const HomeUser = ({ isLoggedIn }) => {
  // const [user, setUser] = useState({});
  // const handleUserData = async () => {
  //   const response = await fetch(userData);
  //   const data = await response.json();
  //   setUser(data);
  // };
  // useEffect(() => {
  //   handleUserData();
  // }, []);
  // console.log(user);
  const [value, setValue] = useState("");
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div>
      {value ? (
        <div>
          <h1 className="text-3xl text-greenPrimary">Hi {value}</h1>
          <h2 className="text-2xl">Welcome Back!</h2>
        </div>
      ) : (
        <a
          onClick={handleSignIn}
          href="#"
          className="rounded-lg bg-greenPrimary px-5 py-3 text-2xl text-white"
        >
          Sign in
        </a>
      )}
    </div>
  );
};

{
  /* use a button */
}
HomeUser.propTypes = {
  isLoggedIn: PropTypes.boolean,
};
export default HomeUser;
