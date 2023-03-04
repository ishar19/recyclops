/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Lives from "./Lives";
import Score from "./Score";
import { saveGame, getQuestions } from "../../APIs/Game";
import { rectIntersection, useDroppable } from "@dnd-kit/core";
import { Item } from "./Item";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { binData } from "../../utils/bins.data";
import { shuffle } from "../../utils/shuffleArray";
const Dustbins = ({ user }) => {
  const [isDropped, setIsDropped] = useState(true);

  const [bins, setBins] = useState([]);
  const [trash, setTrash] = useState(null);
  const [correctBin, setCorrectBin] = useState(null);
  const [score, setScore] = useState(null);
  const [lives, setLives] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  function handleDragEnd(event) {
    const gameData = JSON.parse(window.localStorage.getItem("gameData"));
    if (event.over && event.over.id !== null) {
      if (event.over.id == correctBin) {
        gameData.score += 10;
        window.localStorage.setItem("gameData", JSON.stringify(gameData));
        setScore(gameData.score);
      } else {
        gameData.livesLeft -= 1;
        window.localStorage.setItem("gameData", JSON.stringify(gameData));
        setLives(gameData.livesLeft);
      }
    }
    setIsDropped(true);
  }
  const handleDragStart = (e) => console.log("dragStart");
  const handleDragOver = ({ active }) => console.log("dragOver");
  const fetchQuestions = async () => {
    const question = await getQuestions();
    setBins(shuffle([question.correctBinId, ...question.wrongBinIds]));
    setTrash(question.imageUrl);
    setCorrectBin(question.correctBinId);
  };
  useEffect(() => {
    setScore(JSON.parse(window.localStorage.getItem("gameData")).score);
    setLives(JSON.parse(window.localStorage.getItem("gameData")).livesLeft);
    if (isDropped) {
      fetchQuestions();
      setIsDropped(false);
    }
  }, [isDropped]);
  useEffect(() => {
    setScore(JSON.parse(window.localStorage.getItem("gameData")).score);
    setLives(JSON.parse(window.localStorage.getItem("gameData")).livesLeft);
  }, []);
  useEffect(() => {
    const save = async () => {
      const gameData = JSON.parse(window.localStorage.getItem("gameData"));
      gameData.endTimestamp = new Date(Date.now());
      window.localStorage.setItem("gameData", JSON.stringify(gameData));
      await saveGame(JSON.parse(window.localStorage.getItem("gameData")));
      window.localStorage.removeItem("gameData");
    };
    if (lives == 0) {
      alert("Game over");
      save();
    }
  }, [lives]);

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      sensors={sensors}
      collisionDetection={rectIntersection}
    >
      <Item src={trash} />
      {bins.map((bin, idx) => {
        return (
          <Droppable key={idx} id={bin} style={idx}>
            <img src={binData[bin]["image"]} className="z-10 h-[20vh]" />;
          </Droppable>
        );
      })}
      <Score score={score} />
      <Lives lives={lives} />
    </DndContext>
  );
};

export default Dustbins;
const STYLES = {
  0: "absolute top-[15vh] left-[10vw] z-10 h-[20vh]",
  1: "absolute top-[15vh] right-[10vw] z-10 h-[20vh]",
  2: "absolute bottom-[16vh] right-[10vw] z-10 h-[20vh]",
  3: "absolute bottom-[16vh] left-[10vw] z-10 h-[20vh]",
};
function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  return (
    <div ref={setNodeRef} className={`${STYLES[props.style]}`}>
      {props.children}
    </div>
  );
}
