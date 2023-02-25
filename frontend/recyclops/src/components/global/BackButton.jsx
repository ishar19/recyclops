import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className=" absolute top-[2vh] left-[2vw] z-10 flex h-[5vh] items-center justify-center rounded-md bg-greenPrimary px-3 text-white shadow-md"
      onClick={() => navigate(-1)}
    >
      <MdArrowBackIos />
    </button>
  );
};

export default BackButton;
