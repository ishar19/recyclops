import React, { useEffect } from "react";
import DustbinSetup from "../components/Game/DustbinSetup";
import Lives from "../components/Game/Lives";
import Score from "../components/Game/Score";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const title = "Game";
const Game = () => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen bg-sky-300">
        <Score />
        <Lives />
        <DustbinSetup />
      </div>
    </DndProvider>
  );
};

export default Game;
