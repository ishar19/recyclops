import React, { useEffect } from "react";
import LeaderboardContent from "../components/Game/LeaderboardContent";
import gameBackground from "../Assets/Game Background.png";
const title = "RecyclOps | Game Leaderboard";
import Navbar from "../components/global/Navbar";
const GameLeaderboard = () => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-greenPrimary">
      <img src={gameBackground} className="absolute" />
      <LeaderboardContent />
      <Navbar />
    </div>
  );
};

export default GameLeaderboard;
