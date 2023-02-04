import React from "react";
import { bgPrimary, textPrimary } from "../assets/styles"; // todo- use tailwind config for this
// import userData from "../../mock/user.json";
// import { useEffect } from "react";
// import { useState } from "react";
const HomeUser = () => {
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
