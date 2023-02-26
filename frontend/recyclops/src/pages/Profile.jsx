import React, { useContext, useEffect } from "react";
import Navbar from "../components/global/Navbar";
import { MdLogout } from "react-icons/md";
// import { FiBook } from "react-icons/fi";
// import { AiOutlineHeart, AiOutlineGoogle } from "react-icons/ai";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../Context/UserProvider";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Tabs from "../components/Profile/Tabs";
import profileBackground from "../Assets/Profile Background.png";
const title = "RecyclOps | Profile";

const Profile = () => {
  const user = useContext(UserContext);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <img className="absolute top-[25vh]" src={profileBackground} />
      <>
        <div className="flex items-center gap-2">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="h-24 w-24 rounded-full border-2 border-black"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            <h2>{user.email}</h2>
          </div>
        </div>
        <div className="mt-20 flex w-4/5 flex-col gap-3 ">
          <Tabs />
          <button
            onClick={handleLogOut}
            className="flex w-full items-center gap-4 rounded-lg bg-gray-300 bg-opacity-30 p-2 text-2xl drop-shadow-lg backdrop-blur-lg"
          >
            <MdLogout />
            <h2>Log Out</h2>
          </button>
        </div>
      </>

      <Navbar />
    </div>
  );
};
Profile.propTypes = {
  profileData: PropTypes.object,
};
export default Profile;
