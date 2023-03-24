import React from "react";
import Loader from "../../Assets/Logo.png";
// eslint-disable-next-line react/prop-types
const Reset = ({ transparent }) => {
  return (
    <div
      className={`absolute ${
        transparent ? "z-[50]" : "z-[-50]"
      } flex h-screen w-screen flex-col items-center justify-center  ${
        transparent
          ? "bg-none"
          : "bg-gradient-to-l from-[#34A85366]/40 to-[#34A85366]/10"
      }   `}
    >
      <div className=" animate-spin-animation">
        <img src={Loader} />
      </div>
      {!transparent ? (
        <p className=" font-dosis text-4xl font-bold  text-greenPrimary">
          RecyclOps
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Reset;
