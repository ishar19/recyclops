import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
const ProfileBackButton = () => {
  return (
    <Link to="/profile">
      <div className="fixed right-[5vw] bottom-[10vh] flex items-center gap-1 rounded-md bg-greenPrimary px-3 py-2 font-dosis font-medium text-white">
        <MdArrowBack />
        Back
      </div>
    </Link>
  );
};

export default ProfileBackButton;
