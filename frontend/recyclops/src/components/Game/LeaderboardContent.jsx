import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import leaderboardIcon from "../../Assets/leaderboard icon.png";
const LeaderboardContent = () => {
  const players = [
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
    { name: "Ishar Jain", dragDrop: 128, quiz: 100 },
  ];
  const renderBoard = players.map((player, i) => (
    <div key={i} className="flex gap-1">
      <h2 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FABB05] text-white">
        {i + 1}
      </h2>
      <div className="flex h-10 items-center gap-20 rounded-md bg-gradient-to-r from-plastic/70 to-plastic/20 p-3">
        <h2>{player.name}</h2>
        <div className="flex gap-5">
          <h2>{player.dragDrop}</h2>
          <h2>{player.quiz}</h2>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="absolute top-[5vh] z-10  m-2 rounded-md bg-white bg-opacity-10 p-5 font-gloriaHallelujah shadow-md">
      <div className="flex items-center gap-3">
        <img src={leaderboardIcon} className="h-20" />
        <h1 className="text-4xl text-[#FABB05]">Leaderboard</h1>
      </div>
      <div className="ml-14 flex gap-20 text-sm text-white">
        <div>Player</div>
        <div className="flex gap-5">
          <div>Drag Drop</div>
          <div>Quiz</div>
        </div>
      </div>
      <div className="mt-2 flex max-h-[58vh] flex-col gap-4 overflow-y-auto scrollbar-hide ">
        {renderBoard}
      </div>
      <div className="mt-5 flex justify-evenly">
        <Link to="/game">
          <button className="flex items-center gap-1  rounded-md bg-white p-1">
            <MdKeyboardBackspace />
            Back
          </button>
        </Link>
        <input
          type="text"
          name="name"
          className="w-[15vh] rounded-md border-none bg-[#FABB05] p-1 text-center text-white placeholder:text-white"
          placeholder="Find yourself"
        />
      </div>
    </div>
  );
};

export default LeaderboardContent;
