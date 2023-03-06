import React, { useEffect, useContext } from "react";
import DustbinSetup from "../components/Game/DustbinSetup";
import { UserContext } from "../Context/UserProvider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const title = "Game";
const Game = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen bg-sky-300">
        <DustbinSetup user={user} />
      </div>
    </DndProvider>
  );
};

export default Game;
