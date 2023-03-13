import React, { useState, useContext } from "react";
// import { AiOutlineTwitter } from "react-icons/ai";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import PropTypes from "prop-types";
import { UserContext } from "../../Context/UserProvider";
import { removeScan, saveScan } from "../../APIs/User";
import toast from "react-hot-toast";
const saveToast = () => toast.success("Scan saved");
const deleteToast = () => toast.error("Scan removed");

const Footer = ({ scanId }) => {
  const user = useContext(UserContext);

  const [save, setSave] = useState(false);
  const handleSave = async () => {
    setSave((prev) => !prev);
    const isSaveScan = await saveScan(user.uid, scanId);
    if (isSaveScan) {
      saveToast();
    }
  };
  const handleDelete = async () => {
    setSave((prev) => !prev);
    const isDeleteScan = await removeScan(user.uid, scanId);
    if (isDeleteScan) {
      deleteToast();
    }
  };
  return (
    <div className="text-cente absolute bottom-[10vh] left-[50vw] z-10 flex w-full translate-x-[-50%] translate-y-[-50%] items-center justify-around bg-opacity-60 p-8 font-dosis text-2xl font-medium text-white">
      {/* <div className="flex items-center gap-2">
        <AiOutlineTwitter />
        <div>Share</div>
      </div> */}
      {user != null ? (
        <div className="flex items-center gap-2">
          <div>Save</div>
          {!save ? (
            <MdBookmarkBorder onClick={handleSave} />
          ) : (
            <MdBookmark onClick={handleDelete} />
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

Footer.propTypes = {
  scanId: PropTypes.string,
};
export default Footer;
