import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  MdNotificationsNone,
  MdOutlineBookmarkBorder,
  MdOutlineHistory,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../Context/UserProvider";
import { auth, provider } from "../config";
import { signOut, signInWithPopup } from "firebase/auth";
const Profile = ({ profileData }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useContext(UserContext);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);
  const list = [
    {
      title: "Notifications",
      link: "/notifications",
      icon: <MdNotificationsNone />,
    },
    {
      title: "Saved",
      link: "/saved",
      icon: <AiOutlineHeart />,
    },
    {
      title: "Bookmarks",
      link: "/bookmarks",
      icon: <MdOutlineBookmarkBorder />,
    },
    {
      title: "Scan History",
      link: "/scan-history",
      icon: <MdOutlineHistory />,
    },
    {
      title: "Settings",
      link: "/settings",
      icon: <MdOutlineSettings />,
    },
  ];

  const tabs = list.map((tab, i) => (
    <Link key={i} to={tab.link}>
      <div className="item-center flex w-full items-center gap-4 border-b-2 border-black p-2 text-2xl">
        {tab.icon}
        <h2>{tab.title}</h2>
      </div>
    </Link>
  ));
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-20 flex justify-center gap-8 p-5 tracking-wide">
        {isLoggedIn ? (
          <div>
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            <h2>{profileData.phone}</h2>
            <h2>{user.email}</h2>
            <Link to="/edit-profile">
              <div className="w-20 rounded-md bg-gray-400 py-1 text-center">
                Edit
              </div>
            </Link>
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
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="h-24 w-24 rounded-full"
        />
      </div>
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

      <Navbar />
    </div>
  );
};
Profile.propTypes = {
  profileData: PropTypes.object,
};
export default Profile;
