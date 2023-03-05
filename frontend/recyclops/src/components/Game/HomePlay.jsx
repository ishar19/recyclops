/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dragAndDrop from "../../Assets/Drag and drop.png";
import { newGame } from "../../APIs/Game";

// eslint-disable-next-line react/prop-types
const HomePlay = ({ user }) => {
  const navigate = useNavigate();
  const navigateToGame = async () => {
    if (user != null)
      await createNewGame().then(() => {
        navigate("/game/play");
      });
  };

  const createNewGame = async () => {
    // eslint-disable-next-line react/prop-types
    const gameData = await newGame(user.uid);
    window.localStorage.setItem("gameData", JSON.stringify(gameData));
  };
  return (
    <button className="mx-8" onClick={navigateToGame}>
      <img src={dragAndDrop} alt="Play Game" />
    </button>
  );
};

export default HomePlay;
