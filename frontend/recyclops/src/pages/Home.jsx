import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeUser from "../components/HomeUser";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import RecentScans from "../components/RecentScans";
import Articles from "../components/Articles";
const Home = ({
  isLoggedIn,
  user,
  isRecentScan,
  recentScan,
  articles,
  articleTitles,
}) => {
  return (
    <div className="pt-5">
      <div className="flex justify-between px-5">
        <HomeUser isLoggedIn={isLoggedIn} user={user} />
        <Location />
      </div>
      <HomeBanner />
      <RecentScans isRecentScan={isRecentScan} recentScan={recentScan} />
      <Articles articleTitles={articleTitles} articles={articles} />
      <Navbar />
    </div>
  );
};
Home.propTypes = {
  isLoggedIn: PropTypes.boolean,
  user: PropTypes.string,
  isRecentScan: PropTypes.boolean,
  recentScan: PropTypes.array,
  articleTitles: PropTypes.array,
  articles: PropTypes.array,
};
export default Home;
