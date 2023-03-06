import React from "react";
import Loader from "../../Assets/Logo.png";
// eslint-disable-next-line react/prop-types
const Reset = () => {
  return (
    <div
      className={`absolute z-[-50] flex h-screen w-screen items-center justify-center bg-gradient-to-l from-[#34A85366]/40 to-[#34A85366]/10`}
    >
      <img
        src={Loader}
        className="absolute   translate-x-[-50%] translate-y-[-50%] animate-spin-animation"
      />
    </div>
  );
};
export default Reset;
