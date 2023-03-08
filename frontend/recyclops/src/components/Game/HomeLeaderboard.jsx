import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLeaderboardList } from "../../APIs/Game";
// import { getUserData } from "../../APIs/User";

// eslint-disable-next-line react/prop-types
const HomeLeaderboard = ({ user }) => {
  const [leaderboard, setLeaderBoard] = useState([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      await getLeaderboardList().then((data) => {
        data.map(async (i) => {
          const obj = { score: i.score, name: i.name };
          setLeaderBoard((prev) => [...prev, obj]);
        });
      });
    };
    getLeaderboard();
  }, []);
  const renderBoard = leaderboard.map((player, i) => (
    <div key={i} className="flex gap-1">
      <h2 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FABB05] text-white">
        {i + 1}
      </h2>
      <div className="flex h-10 items-center gap-14 rounded-md bg-gradient-to-r from-plastic/70 to-plastic/20 p-3">
        <h2>{player.name}</h2>
        <div className="flex gap-5">
          <h2>{player.score}</h2>
        </div>
      </div>
    </div>
  ));
  return (
    <Link to="/game/leaderboard">
      <button className="relative mx-8 rounded-lg bg-gray-300 bg-opacity-30 p-5  font-gloriaHallelujah drop-shadow-lg backdrop-blur-lg">
        <h1 className="text-3xl text-[#FABB05]">Leaderboard</h1>
        <div className=" ml-14 flex justify-between text-sm text-white">
          <div>Player</div>
          <div>Drag Drop</div>
        </div>
        <div className="flex flex-col gap-2"> {renderBoard}</div>
      </button>
    </Link>
  );
};

export default HomeLeaderboard;
