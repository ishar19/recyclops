import React from "react";
import { bgPrimary, textPrimary } from "../assets/styles"; // todo- use tailwind config for this
const HomeUser = () => {
  const dummyData = { isLoggedIn: true, user: "Diksha" };

  return (
    <div>
      {dummyData.isLoggedIn ? (
        <div>
          <h1 className={`text-3xl ${textPrimary}`}>Hi {dummyData.user}</h1>
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

{
  /* use a button */
}
export default HomeUser;
