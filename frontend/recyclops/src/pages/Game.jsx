import React, { useEffect } from "react";
import DustbinSetup from "../components/Game/DustbinSetup";
import Lives from "../components/Game/Lives";
import Score from "../components/Game/Score";
const title = "RecyclOps | Game";
const Game = () => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className="h-screen bg-sky-300">
      <Score />
      <Lives />
      <DustbinSetup />
    </div>
  );
};

export default Game;
