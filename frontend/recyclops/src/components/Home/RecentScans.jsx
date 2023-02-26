import React, { useEffect, useState } from "react";
import { MdAddTask } from "react-icons/md";
import PropTypes from "prop-types";
import RecentScansModal from "./RecentScansModal";
const RecentScans = ({ isRecentScan, recentScan }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  const recentScans = recentScan.map((scan, i) => {
    const [bg, setBg] = useState("");
    const checkCatgory = () => {
      switch (scan.category) {
        case "Organic":
          setBg("from-organic/60 to-organic/20");
          break;
        case "Glass":
          setBg("from-glass/60 to-glass/20");
          break;
        case "Paper":
          setBg("from-paper/60 to-paper/20");
          break;
        case "Metal":
          setBg("from-metal/60 to-metal/20");
          break;
        case "Plastic":
          setBg("from-plastic/60 to-plastic/20");
          break;
        case "Hazard":
          setBg("from-hazard/60 to-hazard/20");
          break;
        case "Cardboard":
          setBg("from-cardboard/60 to-cardboard/20");
          break;
      }
    };
    useEffect(() => {
      checkCatgory();
    }, [scan]);
    return (
      <div
        key={i}
        className={`flex flex-shrink-0 flex-col items-center rounded-md bg-opacity-50 bg-gradient-to-r ${bg} py-2 px-2 drop-shadow-lg`}
        onClick={handleModal}
      >
        <img src={scan.img} alt="scan image" className="block h-20 w-28" />
        <div>
          <h2 className="font-dosis text-xl font-medium">{scan.title}</h2>
          <p className="font-dosis text-lg font-light text-opacity-95">
            {scan.date}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="mb-2 font-dosis text-2xl font-normal text-greenPrimary">
        Recent Scans
      </h1>
      <div>
        {isRecentScan ? (
          <div className="  flex gap-5 overflow-x-scroll py-4 scrollbar-hide lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default">
            {recentScans}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="flex gap-1 font-dosis text-2xl font-medium">
              No History <MdAddTask />
            </h2>
            <a
              href="#"
              className="rounded-lg bg-greenPrimary px-5 py-1 font-dosis text-2xl font-medium text-white"
            >
              Start Scanning
            </a>
          </div>
        )}
      </div>
      {showModal && <RecentScansModal handleModal={handleModal} />}
    </div>
  );
};
RecentScans.propTypes = {
  isRecentScan: PropTypes.boolean,
  recentScan: PropTypes.array,
};
export default RecentScans;
