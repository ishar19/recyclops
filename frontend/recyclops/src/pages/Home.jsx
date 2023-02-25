import React, { useEffect } from "react";
import HomeBanner from "../components/Home/HomeBanner";
import HomeUser from "../components/Home/HomeUser";
import Location from "../components/Home/Location";
import Navbar from "../components/global/Navbar";
import PropTypes from "prop-types";
import RecentScans from "../components/Home/RecentScans";
import Articles from "../components/Home/Articles";

const title = "RecyclOps | Home";
const Home = ({
  isLoggedIn,
  user,
  isRecentScan,
  recentScan,
  articles,
  articleTitles,
}) => {
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
        <RecentScans isRecentScan={isRecentScan} recentScan={recentScan} />
        <Articles articleTitles={articleTitles} articles={articles} />
      </div>
      <Navbar />
    </>
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
