import React from "react";
import { Link } from "react-router-dom";
import dragAndDrop from "../../Assets/Drag and drop.png";
const HomePlay = () => {
  return (
    <Link to="/game/play">
      <button className="mx-8">
        <img src={dragAndDrop} alt="Play Game" />
      </button>
    </Link>
  );
};

export default HomePlay;
