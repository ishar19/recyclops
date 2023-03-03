import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import PropTypes from "prop-types";

const Lives = ({ lives }) => {
  const lifes = [];
  for (let i = 0; i < lives; i++) {
    lifes.push(<AiFillHeart className=" text-red-500" />);
  }
  for (let i = lifes.length; i < 3; i++) {
    lifes.push(<AiOutlineHeart />);
  }
  return (
    <div className="absolute top-[1vh] right-[2vw] mt-5 flex gap-3 self-baseline text-3xl">
      {lifes.map((life) => life)}
    </div>
  );
};
Lives.propTypes = {
  lives: PropTypes.number,
};
export default Lives;
