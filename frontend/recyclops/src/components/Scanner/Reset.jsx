import React from "react";
// import staticLoaderLogo from "../../assets/staticLoaderLogo.svg";
import staticLoaderLogo from "../../assets/Recycleops.gif";
const Reset = () => {
  return (
    <div className="absolute z-[-2]">
      <img
        src={staticLoaderLogo}
        className=" relative top-[50vh] left-[50vw] h-[50vh] translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
};
export default Reset;
