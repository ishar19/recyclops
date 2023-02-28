import React, { useContext } from "react";
import Navbar from "../components/global/Navbar";
import { MdLogout } from "react-icons/md";
import PropTypes from "prop-types";
import { UserContext } from "../Context/UserProvider";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Tabs from "../components/Profile/Tabs";
import profileBackground from "../Assets/Profile Background.png";
import SEO from "../components/global/SEO";
// const title = "RecyclOps | Profile";

const Profile = () => {
  const user = useContext(UserContext);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(() => {
  //   document.title = title;
  // }, []);
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <SEO
        title="RecyclOps | Profile"
        description="AI powered tool for waste management"
        authors="Ishar Jain Prabkirat Singh Bhavya Giri Diksha Raj"
        name="RecyclOps"
        keywords="Trash Disposal AI React Sustainable Development Game"
      />
      <img className="absolute top-[25vh]" src={profileBackground} />
      <>
        <div className="flex items-center gap-2">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="h-24 w-24 rounded-full border-2 border-black"
          />
          <div>
            <h1 className="font-dosis text-2xl font-normal">
              {user.displayName}
            </h1>
            <h2 className="font-dosis font-light">{user.email}</h2>
          </div>
        </div>
        <div className="mt-20 flex w-4/5 flex-col gap-3 ">
          <Tabs />
          <button
            onClick={handleLogOut}
            className="flex w-full items-center gap-4 rounded-lg bg-gray-300 bg-opacity-30 p-2 font-dosis text-2xl font-bold drop-shadow-lg backdrop-blur-lg"
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
