import React, { useContext, useEffect } from "react";
import Navbar from "../components/global/Navbar";
import { MdLogout } from "react-icons/md";
import PropTypes from "prop-types";
import { UserContext } from "../Context/UserProvider";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Tabs from "../components/Profile/Tabs";
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
      <>
        <div>
          <h1 className="text-2xl font-bold">{user.displayName}</h1>
          <h2>{user.email}</h2>
        </div>
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="h-24 w-24 rounded-full"
        />
        <div className="mt-20 w-4/5 ">
          <Tabs />
          <button
            onClick={handleLogOut}
            className="item-center flex w-full items-center gap-4 border-b-2 border-black p-2 text-2xl"
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
