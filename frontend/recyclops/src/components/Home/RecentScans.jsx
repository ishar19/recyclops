/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState, useRef } from "react";
import { MdAddTask } from "react-icons/md";
import PropTypes from "prop-types";
import { UserContext } from "../../Context/UserProvider";
import { getRecentScansId, getScans } from "../../APIs/Scans";
import { getHumanDate } from "../../utils/getHumanDate";
import RecentScansModal from "./RecentScansModal";
import { Link } from "react-router-dom";
import ScanBoxes from "../global/ScanBoxes";
const RecentScans = ({ user }) => {
  // const user = useContext(UserContext);
  const [scanData, setScanData] = useState([]);

  // const scanData = [];
  //   const fetchScans = async () => {
  //     const scanId = await getRecentScansId(user);
  //     scanId.map(async (id) => {
  //       const scan = await getScans(id);
  //       setScanData((prev) => [...prev, scan]);
  //       scanData.push(scan);
  //     });
  //   };
  const fetchScans = async () => {
    const scanId = await getRecentScansId(user);
    scanId.map(async (id) => {
      const scan = await getScans(id);
      setScanData((prev) => [...prev, scan]);
    });
  };

  useEffect(() => {
    if (user == null) {
      setScanData([]);
    }
    if (user != null) {
      fetchScans();
    }
  }, [user]);
  //   useEffect(() => {

  //   }, []);

  return (
    <div>
      <h1 className="mb-2 font-dosis text-2xl font-normal text-greenPrimary">
        Recent Scans
      </h1>
      <div>
        {user != null ? (
          <div className="my-6 flex gap-5 overflow-x-scroll py-8 text-center scrollbar-hide lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default">
            {scanData.length == 0 ? (
              <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="flex gap-1 font-dosis text-2xl font-medium">
                  No History <MdAddTask />
                </h2>
                <Link to="/scanner">
                  <button className="rounded-lg bg-greenPrimary px-5 py-1 font-dosis text-2xl font-medium text-white">
                    Start Scanning
                  </button>
                </Link>
              </div>
            ) : (
              <></>
            )}
            {scanData.map((scan, i) => (
              <ScanBoxes scan={scan} key={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="flex gap-1 font-dosis text-2xl font-medium">
              No History <MdAddTask />
            </h2>
            <Link to="/scanner">
              <button className="rounded-lg bg-greenPrimary px-5 py-1 font-dosis text-2xl font-medium text-white">
                Start Scanning
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
RecentScans.propTypes = {
  recentScan: PropTypes.array,
  user: PropTypes.any,
};
export default RecentScans;
