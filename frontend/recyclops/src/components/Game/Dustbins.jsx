import React from "react";
import redTrash from "../../Assets/red trash.png";
import greenTrash from "../../Assets/green trash.png";
import brownTrash from "../../Assets/brown trash.png";
import yellowTrash from "../../Assets/yellow trash.png";
const Dustbins = () => {
  return (
    <>
      <img
        src={greenTrash}
        className="absolute top-[15vh] right-[10vw] z-10 h-[20vh]"
      />
      <img
        src={redTrash}
        className="absolute top-[15vh] left-[10vw] z-10 h-[20vh]"
      />
      <img
        src={brownTrash}
        className="absolute bottom-[16vh] right-[10vw] z-10 h-[20vh]"
      />
      <img
        src={yellowTrash}
        className="absolute bottom-[16vh] left-[10vw] z-10 h-[20vh]"
      />
    </>
  );
};

export default Dustbins;
