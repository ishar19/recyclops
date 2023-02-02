import React from "react";
import { bgPrimary, textPrimary } from "../assets/styles";
import PropTypes from "prop-types";
const HomeUser = ({ isLoggedIn, user }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className={`text-3xl ${textPrimary}`}>Hi {user}</h1>
          <h2 className="text-2xl">Welcome Back!</h2>
        </div>
      ) : (
        <a
          href="#"
          className={`${bgPrimary} rounded-lg px-5 py-3 text-2xl text-white`}
        >
          Sign in
        </a>
      )}
    </div>
  );
};
HomeUser.propTypes = {
  isLoggedIn: PropTypes.boolean,
  user: PropTypes.string,
};

export default HomeUser;
