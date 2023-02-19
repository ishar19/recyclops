import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

const Footer = () => {
  const [save, setSave] = useState(false);
  const handleSave = () => {
    setSave((prev) => !prev);
  };
  return (
    <div className="flex w-full justify-around">
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
