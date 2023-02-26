import React from "react";
import {
  //   MdNotificationsNone,
  MdOutlineBookmarkBorder,
  // MdOutlineHistory,
  //   MdOutlineSettings,
} from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Tabs = () => {
  const list = [
    {
      title: "Scan History",
      link: "/profile/scanhistory",
      icon: <AiOutlineHeart />,
    },
    {
      title: "Saved Scans",
      link: "/profile/savedscans",
      icon: <AiOutlineHeart />,
    },
    {
      title: "Reading History",
      link: "/profile/readinghistory",
      icon: <FiBook />,
    },
    {
      title: "Bookmarks",
      link: "/profile/bookmarks",
      icon: <MdOutlineBookmarkBorder />,
    },
    {
      title: "About Us",
      link: "/profile/aboutus",
      icon: <FiBook />,
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {list.map((tab, i) => (
        <Link key={i} to={tab.link}>
          <button className="flex w-full items-center gap-4 rounded-lg bg-gray-300 bg-opacity-30 p-2 font-dosis text-2xl font-bold drop-shadow-lg backdrop-blur-lg">
            {tab.icon} {tab.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
