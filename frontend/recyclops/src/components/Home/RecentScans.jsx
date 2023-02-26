/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState, useRef } from "react";
import { MdAddTask } from "react-icons/md";
import PropTypes from "prop-types";
import { UserContext } from "../../Context/UserProvider";
import { getRecentScansId, getScans } from "../../APIs/Scans";
import { getHumanDate } from "../../utils/getHumanDate";
import RecentScansModal from "./RecentScansModal";

const RecentScans = ({ user }) => {
  // const user = useContext(UserContext);
  const [scanData, setScanData] = useState([]);

  // const scanData = [];
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
  //   console.log(user);
  // console.log(scanData);
  // useEffect(() => {
  //   const fetchScans = async () => {
  //     console.log("here");
  //     const scanId = await getRecentScansId(user);
  //     scanId.map(async (id) => {
  //       const scan = await getScans(id);
  //       setScanData((prev) => [...prev, scan]);
  //     });
  //   };
  //   if (user != null) {
  //     fetchScans();
  //   }
  // }, []);

  return (
    <div>
      <h1 className="mb-2 text-2xl text-greenPrimary">Recent Scans</h1>
      <div>
        {user != null ? (
          <div className="my-6 flex gap-5 overflow-x-scroll py-8 scrollbar-hide lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default">
            {scanData.map((scan, i) => (
              <ScanBoxes scan={scan} key={i} />
            ))}
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

const ScanBoxes = ({ scan, key }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div
        key={key}
        className={`trash${scan["scanData"]["color"]} flex-shrink-0 rounded-md p-4 shadow-md  drop-shadow-md`}
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
