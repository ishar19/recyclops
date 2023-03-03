import React from "react";
import PropTypes from "prop-types";
const Score = ({ score }) => {
  return (
    <div
      className="absolute
     left-[2vw] top-[1vh] grid grid-cols-2 gap-x-4 gap-y-3 p-5 font-gloriaHallelujah"
    >
      {/* <h2>HighScore </h2>
      <h2>{score.highScore}</h2> */}
      <h2>Score </h2>
      <h2>{score}</h2>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
