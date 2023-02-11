import React from "react";
import PropTypes from "prop-types";
import { textPrimary } from "../assets/styles";

const RecentScansModal = ({ setOpenModal, recentScanModal }) => {
  const recentScans = recentScanModal.map((scan, i) => {
    return (
      <div
        key={i}
        className="mx-2 mb-3 flex gap-5 rounded-lg border-[1.5px] border-solid border-[#34A853] p-3"
      >
        <div>
          <h2 className={`text-2xl`}>{scan.title}</h2>
          <p className={`${textPrimary} text-xl`}>{scan.date}</p>
        </div>
        <img src={scan.img} alt="scan image" className="w-24" />
      </div>
    );
  });
  return (
    <div className="fixed flex h-screen w-screen items-center justify-center bg-[c8c8c8]">
      <div className="flex h-3/4 w-11/12 flex-col rounded-lg bg-white p-6 shadow-xl">
        <div className="flex justify-end">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="mt-3 inline-block text-center">
          <h1>Recent Scans</h1>
        </div>
        <div>{recentScans}</div>
      </div>
    </div>
  );
};
RecentScansModal.propTypes = {
  setOpenModal: PropTypes.func,
  recentScanModal: PropTypes.array,
};
export default RecentScansModal;
