import React, { useEffect, useContext } from "react";
import HomeBanner from "../components/Home/HomeBanner";
import HomeUser from "../components/Home/HomeUser";
import Location from "../components/Home/Location";
import Navbar from "../components/global/Navbar";
import RecentScans from "../components/Home/RecentScans";
import Articles from "../components/Home/Articles";

import { UserContext } from "../Context/UserProvider";

const Home = () => {
  const user = useContext(UserContext);
  const title = "RecyclOps";
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <div className="px-[5vw] pt-5 pb-16">
        <div className="flex items-center justify-between">
          <HomeUser />
          <Location />
        </div>
        <HomeBanner />
        <RecentScans user={user} />
        <Articles user={user} />
      </div>
      <Navbar />
    </>
  );
};
export default Home;
