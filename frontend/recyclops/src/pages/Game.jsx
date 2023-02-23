import React from "react";
import DustbinSetup from "../components/Game/DustbinSetup";
import Lives from "../components/Game/Lives";
import Score from "../components/Game/Score";

const Game = () => {
  return (
    <div className="h-screen bg-sky-300">
      <div className="flex items-center">
        {" "}
        <Score />
        <Lives />
      </div>
      <DustbinSetup />
    </div>
  );
};

export default Game;
