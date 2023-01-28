import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeUser from "../components/HomeUser";
import Location from "../components/Location";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="pt-5">
      <div className="flex justify-between px-5">
        <HomeUser />
        <Location />
      </div>
      <HomeBanner />
      <Navbar />
    </div>
  );
};

export default Home;
