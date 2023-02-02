import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeUser from "../components/HomeUser";
import Location from "../components/Location";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="px-[5vw] pt-5">
      <div className="flex items-center justify-between">
        <HomeUser />
        <Location />
      </div>
      <HomeBanner />
      <Navbar />
    </div>
  );
};

export default Home;
