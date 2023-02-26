import React from "react";
import { Link } from "react-router-dom";

const top3 = [
  { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
  { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
  { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
];
const HomeLeaderboard = () => {
  const renderBoard = top3.map((player, i) => (
    <div key={i} className="flex gap-1">
      <h2 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FABB05] text-white">
        {i + 1}
      </h2>
      <div className="flex h-10 items-center gap-14 rounded-md bg-gradient-to-r from-plastic/70 to-plastic/20 p-3">
        <h2>{player.name}</h2>
        <div className="flex gap-5">
          <h2>{player.dragDrop}</h2>
          <h2>{player.quiz}</h2>
        </div>
      </div>
    </div>
  ));
  return (
    <Link to="/game/leaderboard">
      <button className="relative  mx-8 rounded-lg bg-gray-300 bg-opacity-30  p-5 drop-shadow-lg backdrop-blur-lg">
        <h1 className="text-3xl text-[#FABB05]">Leaderboard</h1>
        <div className=" ml-14 flex gap-14 text-sm text-white">
          <div>Player</div>
          <div className="flex gap-5">
            <div>Drag Drop</div>
            <div>Quiz</div>
          </div>
        </div>
        <div className="flex flex-col gap-2"> {renderBoard}</div>
      </button>
    </Link>
  );
};

export default HomeLeaderboard;
