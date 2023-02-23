import React from "react";
import LeaderboardContent from "../components/Game/LeaderboardContent";
import gameBackground from "../Assets/Game Background.png";
const GameLeaderboard = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-greenPrimary">
      <img src={gameBackground} className="absolute" />
      <LeaderboardContent />
    </div>
  );
};

export default GameLeaderboard;