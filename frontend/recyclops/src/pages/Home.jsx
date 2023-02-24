import React, { useEffect, useContext } from "react";
import HomeBanner from "../components/Home/HomeBanner";
import HomeUser from "../components/Home/HomeUser";
import Location from "../components/Home/Location";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import RecentScans from "../components/Home/RecentScans";
import Articles from "../components/Home/Articles";
import { UserContext } from "../Context/UserProvider";
const Home = ({ recentScan, articles, articleTitles }) => {
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
        <RecentScans user={user} recentScan={recentScan} />
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
