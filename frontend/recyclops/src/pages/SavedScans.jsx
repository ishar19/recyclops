import React from "react";
import Navbar from "../components/global/Navbar";
import ProfileBackButton from "../components/global/ProfileBackButton";
import { MdOutlineHistory } from "react-icons/md";
const SavedScans = () => {
  return (
    <div>
      <h1 className="flex items-center gap-1 p-5 text-4xl text-greenPrimary">
        <MdOutlineHistory />
        Saved Scan
      </h1>
      <ProfileBackButton />
      <Navbar />
    </div>
  );
};

export default SavedScans;
