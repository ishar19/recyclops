import React from "react";
import Navbar from "../components/global/Navbar";
import ProfileBackButton from "../components/global/ProfileBackButton";
import { MdOutlineHistory } from "react-icons/md";

const ScanHistory = () => {
  return (
    <div>
      <h1 className="flex items-center gap-1 p-5 text-4xl text-greenPrimary">
        <MdOutlineHistory />
        Scan History
      </h1>
      <ProfileBackButton />
      <Navbar />
    </div>
  );
};

export default ScanHistory;
