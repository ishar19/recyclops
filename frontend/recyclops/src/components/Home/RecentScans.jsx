import React from "react";
import { MdAddTask } from "react-icons/md";
import PropTypes from "prop-types";
const RecentScans = ({ isRecentScan, recentScan }) => {
  const recentScans = recentScan.map((scan, i) => {
    return (

      <div key={i} className="flex-shrink-0">
        <img src={scan.img} alt="scan image" className="block h-20 w-28" />
        <div>
          <h2 className="text-xl">{scan.title}</h2>
          <p className="text-lg text-greenPrimary text-opacity-95">
            {scan.date}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="mb-2 text-2xl text-greenPrimary">Recent Scans</h1>
      <div>
        {isRecentScan ? (
          <div className="  flex gap-5 overflow-x-scroll py-4 scrollbar-hide lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default">
            {recentScans}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="flex gap-1 text-2xl">
              No History <MdAddTask />
            </h2>
            <a
              href="#"
              className="rounded-lg bg-greenPrimary px-5 py-1 text-2xl text-white"
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
