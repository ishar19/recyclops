import React from "react";
import PropTypes from "prop-types";
// import userData from "../../mock/user.json";
// import { useEffect } from "react";
// import { useState } from "react";
const HomeUser = ({ isLoggedIn, user }) => {
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

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className="text-3xl text-greenPrimary">Hi {user}</h1>
          <h2 className="text-2xl">Welcome Back!</h2>
        </div>
      ) : (
        <a
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
  user: PropTypes.string,
};
export default HomeUser;
