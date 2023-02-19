import React from "react";
import {
  //   MdNotificationsNone,
  MdOutlineBookmarkBorder,
  MdOutlineHistory,
  //   MdOutlineSettings,
} from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Tabs = () => {
  const list = [
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

    {
      title: "Reading History",
      link: "/readinghistory",
      icon: <FiBook />,
    },
  ];
  return (
    <div>
      {list.map((tab, i) => (
        <Link key={i} to={tab.link}>
          <button className="item-center flex w-full items-center gap-4 border-b-2 border-black p-2 text-2xl">
            {tab.icon} {tab.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
