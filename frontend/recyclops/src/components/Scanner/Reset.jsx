import React from "react";
// import staticLoaderLogo from "../../assets/staticLoaderLogo.svg";
import Loader from "../../Assets/Recycleops.gif";
const Reset = () => {
  return (
    <div className="absolute z-[-2]">
      <img
        src={Loader}
        className=" relative top-[50vh] left-[50vw] h-[50vh] translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
};
export default Reset;
