import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeUser from "../components/HomeUser";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import RecentScans from "../components/RecentScans";
const Home = ({ isLoggedIn, user, isRecentScan, recentScan }) => {
  return (
    <div className="pt-5">
      <div className="flex justify-between px-5">
        <HomeUser isLoggedIn={isLoggedIn} user={user} />
        <Location />
      </div>
      <HomeBanner />
      <RecentScans isRecentScan={isRecentScan} recentScan={recentScan} />
      <Navbar />
    </div>
  );
};
Home.propTypes = {
  isLoggedIn: PropTypes.boolean,
  user: PropTypes.string,
  isRecentScan: PropTypes.boolean,
  recentScan: PropTypes.array,
};
export default Home;
