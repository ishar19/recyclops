import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  MdNotificationsNone,
  MdOutlineBookmarkBorder,
  MdOutlineHistory,
  MdOutlineSettings,
  // MdLogout,
} from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../Context/UserProvider";

const Profile = ({ profileData }) => {
  const user = useContext(UserContext);

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
  useEffect(() => {
    console.log(user.photoURL);
  }, []);

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
        <img
          src={user.photoURl}
          alt="profile-img"
          className="h-24 w-24 rounded-full"
        />
      </div>
      <div className="mt-20 w-4/5 ">{tabs}</div>

      <Navbar />
    </div>
  );
};
Profile.propTypes = {
  profileData: PropTypes.object,
};
export default Profile;
