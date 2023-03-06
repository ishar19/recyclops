import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/global/Navbar";
import ProfileBackButton from "../components/global/ProfileBackButton";
import { MdOutlineCompare } from "react-icons/md";
import { UserContext } from "../Context/UserProvider";
import { getRecentScansId, getScans } from "../APIs/Scans";
import { Link } from "react-router-dom";
import ScanBoxes from "../components/global/ScanBoxes";
import { MdAddTask } from "react-icons/md";

const ScanHistory = () => {
  const user = useContext(UserContext);
  const [scanData, setScanData] = useState([]);

  useEffect(() => {
    if (user != null) {
      setScanData([]);
    }
  }, [user]);
  useEffect(() => {
    const fetchScans = async () => {
      const scanId = await getRecentScansId(user);
      scanId.map(async (id) => {
        const scan = await getScans(id);
        setScanData((prev) => [...prev, scan]);
      });
    };
    if (user != null) {
      fetchScans();
    }
  }, []);
  return (
    <div>
      <h1 className="flex items-center gap-1 px-5 pt-5 font-dosis text-4xl font-bold text-greenPrimary">
        <MdOutlineCompare />
        Scan History
      </h1>
      <div className="p-5 pb-16">
        {user != null ? (
          <div className="my-6 grid grid-cols-2 gap-5 overflow-y-scroll">
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
      <ProfileBackButton />
      <Navbar />
    </div>
  );
};

export default ScanHistory;
