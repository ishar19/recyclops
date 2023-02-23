import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Lives = () => {
  const lives = [false, true, true];
  const renderLives = lives.map((live, i) => (
    <div key={i}>
      {" "}
      {live ? <AiFillHeart className=" text-red-500" /> : <AiOutlineHeart />}
    </div>
  ));
  return (
    <div className="right-5 z-20 mt-5 flex w-1/2 gap-3 self-baseline pl-16 text-3xl">
      {renderLives}
    </div>
  );
};

export default Lives;
