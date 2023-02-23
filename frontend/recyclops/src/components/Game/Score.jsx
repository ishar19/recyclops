import React from "react";

const Score = () => {
  const score = { highScore: 250, score: 150 };
  return (
    <div className="grid w-1/2 grid-cols-2 gap-3 p-5">
      <h2>HighScore </h2>
      <h2>{score.highScore}</h2>
      <h2>Score </h2>
      <h2>{score.score}</h2>
    </div>
  );
};

export default Score;
