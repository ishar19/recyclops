import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import {
  //   MdNotificationsNone,
  MdOutlineBookmarkBorder,
  MdOutlineHistory,
  //   MdOutlineSettings,
  MdLogout,
} from "react-icons/md";

import { FiBook } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../Context/UserProvider";
import { auth, provider } from "../firebaseConfig";
import { signOut, signInWithPopup } from "firebase/auth";
const Profile = () => {
  const user = useContext(UserContext);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const list = [
    // {
    //   title: "Notifications",
    //   link: "/notifications",
    //   icon: <MdNotificationsNone />,
    // },
    {
      title: "Saved Scans",
      link: "/savedscans",
      icon: <AiOutlineHeart />,
    },
    {
      title: "Bookmarks",
      link: "/bookmarks",
      icon: <MdOutlineBookmarkBorder />,
    },
    {
      title: "Scan History",
      link: "/scanhistory",
      icon: <MdOutlineHistory />,
    },
    // {
    //   title: "Settings",
    //   link: "/settings",
    //   icon: <MdOutlineSettings />,
    // },
    {
      title: "Reading History",
      link: "/readinghistory",
      icon: <FiBook />,
    },
  ];

  const tabs = list.map((tab, i) => (
    <Link key={i} to={tab.link}>
      <button className="item-center flex w-full items-center gap-4 border-b-2 border-black p-2 text-2xl">
        {tab.icon} {tab.title}
      </button>
    </Link>
  ));
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      {user ? (
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
            {tabs}
            <button
              onClick={handleLogOut}
              className="item-center flex w-full items-center gap-4 border-b-2 border-black p-2 text-2xl"
            >
              <MdLogout />
              <h2>Log Out</h2>
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={handleSignIn}
          href="#"
          className="flex items-center gap-2 rounded-lg bg-greenPrimary px-5 py-3 text-2xl text-white"
        >
          <AiOutlineGoogle />
          Sign in
        </button>
      )}
      <Navbar />
    </div>
  );
};
Profile.propTypes = {
  profileData: PropTypes.object,
};
export default Profile;
