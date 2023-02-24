/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState, useRef } from "react";
import { MdAddTask } from "react-icons/md";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { UserContext } from "../../Context/UserProvider";
import { getRecentScansId, getScans } from "../../APIs/Scans";
import { getHumanDate } from "../../utils/getHumanDate";
const RecentScans = ({ user }) => {
  //   const user = useContext(UserContext);
  const [scanData, setScanData] = useState([]);
  //   const scanData = [];
  const fetchScans = async () => {
    console.log("here");
    const scanId = await getRecentScansId(user);
    scanId.map(async (id) => {
      const scan = await getScans(id);
      setScanData((prev) => [...prev, scan]);
      scanData.push(scan);
      console.log(scanData);
    });
  };
  useEffect(() => {
    if (user != null) {
      setScanData([]);
      fetchScans();
    }
  }, [user]);
  console.log(user);
  console.log(scanData);
  //   useEffect(() => {
  //     const fetchScans = async () => {
  //       console.log("here");
  //       const scanId = await getRecentScansId(user);
  //       scanId.map(async (id) => {
  //         const scan = await getScans(id);
  //         setScanData((prev) => [...prev, scan]);
  //       });
  //     };
  //     if (user != null) {
  //       fetchScans();
  //     }
  //   }, []);

  const recentScans = scanData.map((scan, i) => {
    return (
      <div
        key={i}
        className={`trash${scan["scanData"]["color"]} flex-shrink-0 rounded-md p-4 shadow-md  drop-shadow-md`}
=======
const RecentScans = ({ isRecentScan, recentScan }) => {
  const recentScans = recentScan.map((scan, i) => {
    const modoulo = (i + 1) % 2;
    return (
      <div
        key={i}
        className={`flex flex-shrink-0 flex-col items-center rounded-md bg-opacity-50 bg-gradient-to-r ${
          modoulo === 1
            ? "from-bluePrimary/60 to-bluePrimary/20"
            : "from-redPrimary/60 to-redPrimary/20"
        } py-2 px-2 drop-shadow-lg`}
>>>>>>> 24a88138d7955b0bc5cec996db9c5264d2c85112
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
    );
  });

  return (
    <div>
      <h1 className="mb-2 text-2xl text-greenPrimary">Recent Scans</h1>
      <div>
        {user != null ? (
          <div className="my-6 flex gap-5 overflow-x-scroll py-8 scrollbar-hide lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default">
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
  recentScan: PropTypes.array,
  user: PropTypes.any,
};
export default RecentScans;
