import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Lives = () => {
  const lives = [{ alive: false }, { alive: true }, { alive: true }];
  const renderLives = lives.map((live, i) => (
    <div key={i}>
      {live.alive ? (
        <AiFillHeart className=" text-red-500" />
      ) : (
        <AiOutlineHeart />
      )}
    </div>
  ));
  return (
    <div className="absolute top-[1vh] right-[2vw] mt-5 flex gap-3 self-baseline text-3xl">
      {renderLives}
    </div>
  );
};

export default Lives;
