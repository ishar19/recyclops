import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

const Footer = () => {
  const [save, setSave] = useState(false);
  const handleSave = () => {
    setSave((prev) => !prev);
  };
  return (
    <div className="text-cente absolute bottom-[10vh] left-[50vw] z-10 flex w-full translate-x-[-50%] translate-y-[-50%] items-center justify-around bg-opacity-60 p-8 font-dosis text-2xl font-medium text-white">
      <div className="flex items-center gap-2">
        <AiOutlineTwitter />
        <div>Share</div>
      </div>
      <div className="flex items-center gap-2">
        <div>Save</div>
        {!save ? (
          <MdBookmarkBorder onClick={handleSave} />
        ) : (
          <MdBookmark onClick={handleSave} />
        )}
      </div>
    </div>
  );
};

export default Footer;
