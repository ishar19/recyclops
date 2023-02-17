import React from "react";
import Navbar from "../components/Navbar";
import {
  MdNotificationsNone,
  MdOutlineBookmarkBorder,
  MdOutlineHistory,
  MdOutlineSettings,
} from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Profile = ({ profileData }) => {
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
    <>
      <div className="mt-20 flex justify-center gap-8 p-5 tracking-wide">
        <div>
          <h1 className="text-2xl font-bold">{profileData.name}</h1>
          <h2>{profileData.phone}</h2>
          <h2>{profileData.email}</h2>
          <Link to="/edit-profile">
            <div className="w-20 rounded-md bg-gray-400 py-1 text-center">
              Edit
            </div>
          </Link>
        </div>
        <img
          src={profileData.img}
          alt="profile-img"
          className="h-24 w-24 rounded-full"
        />
      </div>
      <div className=" mx-10 mt-20 w-4/5 ">{tabs}</div>

      <Navbar />
    </>
  );
};
Profile.propTypes = {
  profileData: PropTypes.object,
};
export default Profile;