import React from "react";
import staticLoaderLogo from "../../assets/staticLoaderLogo.svg";
const Reset = () => {
  return (
    <div className="absolute z-[-2]">
      <img
        src={staticLoaderLogo}
        className=" relative top-[50vh] left-[50vw] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
};
export default Reset;
