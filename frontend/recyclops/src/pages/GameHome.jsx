import React, { useEffect } from "react";
import Navbar from "../components/global/Navbar";
import topImage from "../Assets/Game Background.png";
import HomeLeaderboard from "../components/Game/HomeLeaderboard";
import HomePlay from "../components/Game/HomePlay";

const title = "RecyclOps | Game";
const GameHome = () => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className="flex h-screen flex-col items-center  bg-greenPrimary">
      <img src={topImage} alt="Game" className="max-h-[30vh]" />
      <div className="flex flex-col items-center gap-3">
        <HomeLeaderboard />
        <HomePlay />
      </div>

      <Navbar />
    </div>
  );
};

export default GameHome;
