/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Lives from "./Lives";
import Score from "./Score";
import { saveGame, getQuestions } from "../../APIs/Game";

import { rectIntersection, useDroppable } from "@dnd-kit/core";
import Item from "./Item";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { binData } from "../../utils/bins.data";
import { shuffle } from "../../utils/shuffleArray";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const correctAns = () =>
  toast.success(<Correct />, {
    duration: 1000,
    position: "top-center",
    icon: "✅",
  });
const wrongAns = () =>
  toast.error(<Wrong />, {
    duration: 1000,
    position: "top-center",
    icon: "❎",
  });
const gameOver = () => {
  toast.error(<Over />, {
    duration: 2000,
  });
};
const Dustbins = ({ user }) => {
  const navigate = useNavigate();
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
        correctAns();
        gameData.score += 10;
        window.localStorage.setItem("gameData", JSON.stringify(gameData));
        setScore(gameData.score);
      } else {
        wrongAns();
        gameData.livesLeft -= 1;
        window.localStorage.setItem("gameData", JSON.stringify(gameData));
        setLives(gameData.livesLeft);
      }
    }
    setIsDropped(true);
  }
  const handleDragStart = (e) => {};
  const handleDragOver = ({ active }) => {};
  const fetchQuestions = async () => {
    const question = await getQuestions();
    setBins(shuffle([question.correctBinId, ...question.wrongBinIds]));
    setTrash(question.imageUrl);
    setCorrectBin(question.correctBinId);
  };
  useEffect(() => {
    const gameData = JSON.parse(window.localStorage.getItem("gameData"));
    setScore(gameData.score);
    setLives(gameData.livesLeft);
    if (isDropped) {
      if (gameData.livesLeft != 0) fetchQuestions();
      setIsDropped(false);
    }
  }, [isDropped]);
  useEffect(() => {
    setScore(JSON.parse(window.localStorage.getItem("gameData")).score);
    setLives(JSON.parse(window.localStorage.getItem("gameData")).livesLeft);
  }, []);
  useEffect(() => {
    const navigateBack = setTimeout(() => {
      navigate("/game");
    }, 2000);
    const save = async () => {
      const gameData = JSON.parse(window.localStorage.getItem("gameData"));
      gameData.endTimestamp = new Date(Date.now());
      window.localStorage.setItem("gameData", JSON.stringify(gameData));
      await saveGame(JSON.parse(window.localStorage.getItem("gameData")));
      window.localStorage.removeItem("gameData");
    };
    if (lives == 0) {
      gameOver();
      save();
      setTimeout(() => {
        navigate("/game");
      }, 2000);
    }
    return clearTimeout(navigateBack);
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

const Correct = () => {
  return (
    <div className="px-2 py-1 text-center font-semibold text-black">
      Correct Answer
    </div>
  );
};

const Wrong = () => {
  return (
    <div className="px-2 py-1 text-center font-semibold text-black">
      Wrong Answer
    </div>
  );
};

const Over = () => {
  return (
    <div className="px-4 py-2 text-center ">
      <p className="font-bold text-red-700">Game Over</p>
    </div>
  );
};
