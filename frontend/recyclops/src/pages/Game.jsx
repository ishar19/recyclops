import React from "react";
import Lives from "../components/Game/Lives";
import Score from "../components/Game/Score";

const Game = () => {
  return (
    <div>
      <div className="flex items-center">
        {" "}
        <Score />
        <Lives />
      </div>
    </div>
  );
};

export default Game;
