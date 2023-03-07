import React, { useState } from "react";
import { getHumanDate } from "../../utils/getHumanDate";
import PropTypes from "prop-types";
import RecentScansModal from "../Home/RecentScansModal";
const ScanBoxes = ({ scan, key }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div
        key={key}
        className={`trash${scan["scanData"]["color"]} flex-shrink-0 rounded-md p-4 font-dosis  shadow-md drop-shadow-md`}
        onClick={handleModal}
      >
        <img
          src={scan["scanInfo"]["publicURL"]}
          alt="scan image"
          className="block h-20 w-28"
        />
        <div>
          <h2 className="text-xl">{scan["scanData"]["class"]}</h2>
          <p className="text-lg  text-opacity-95">
            {getHumanDate(scan["scanInfo"]["createdAt"]["seconds"])}
          </p>
        </div>
      </div>
      {showModal && <RecentScansModal scan={scan} handleModal={handleModal} />}
    </>
  );
};

ScanBoxes.propTypes = {
  scan: PropTypes.any,
  key: PropTypes.number,
};

export default ScanBoxes;
