import React from "react";
import Navbar from "../components/global/Navbar";
import ProfileBackButton from "../components/global/ProfileBackButton";
import { MdBookmark } from "react-icons/md";
const SavedScans = () => {
  return (
    <div>
      <h1 className="flex items-center gap-1 p-5 font-dosis text-4xl font-bold text-greenPrimary">
        <MdBookmark />
        Saved Scan
      </h1>
      <ProfileBackButton />
      <Navbar />
    </div>
  );
};

export default SavedScans;
