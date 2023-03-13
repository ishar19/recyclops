/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dragAndDrop from "../../Assets/Drag and drop.png";
import { newGame } from "../../APIs/Game";

// eslint-disable-next-line react/prop-types
const HomePlay = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const navigateToGame = async () => {
    setLoading(true);
    if (user != null)
      await createNewGame().then(() => {
        navigate("/game/play");
      });
    else {
      navigate("/signin");
    }
  };

  const createNewGame = async () => {
    // eslint-disable-next-line react/prop-types
    const gameData = await newGame(user.uid);
    window.localStorage.setItem("gameData", JSON.stringify(gameData));
  };
  return (
    <button
      className={`mx-8 ${loading ? "animate-pulse" : ""} relative`}
      onClick={navigateToGame}
    >
      <span className="absolute top-1 right-2  inline-flex h-[5vh] w-[5vh] animate-ping rounded-full bg-red-500"></span>
      <img src={dragAndDrop} alt="Play Game" />
    </button>
  );
};

export default HomePlay;
