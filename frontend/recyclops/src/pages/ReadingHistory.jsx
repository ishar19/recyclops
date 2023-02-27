import React from "react";
import Navbar from "../components/global/Navbar";
import ProfileBackButton from "../components/global/ProfileBackButton";
import { MdOutlineHistory } from "react-icons/md";

const ReadingHistory = () => {
  return (
    <div>
      <h1 className="flex items-center gap-1 p-5 font-dosis text-4xl font-bold text-greenPrimary">
        <MdOutlineHistory />
        Reading History
      </h1>
      <ProfileBackButton />
      <Navbar />
    </div>
  );
};

export default ReadingHistory;
