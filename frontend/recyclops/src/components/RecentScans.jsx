import React from "react";
import { textPrimary, bgPrimary } from "../assets/styles";
import { MdAddTask } from "react-icons/md";
import PropTypes from "prop-types";
const RecentScans = ({ isRecentScan, recentScan }) => {
  const scans = recentScan.map((scan, i) => {
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
    <div>
      <h1 className={`text-2xl ${textPrimary} mb-2 pl-5`}>Recent Scans</h1>
      <div>
        {isRecentScan ? (
          <div>
            {scans}
            <a
              href="#"
              className=" absolute right-3 cursor-pointer text-xl  underline"
            >
              See more
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="flex gap-1 text-2xl">
              No History <MdAddTask />
            </h2>
            <a
              href="#"
              className={`${bgPrimary} rounded-lg px-5 py-1 text-2xl text-white`}
            >
              Start Scanning
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
RecentScans.propTypes = {
  isRecentScan: PropTypes.boolean,
  recentScan: PropTypes.array,
};
export default RecentScans;
