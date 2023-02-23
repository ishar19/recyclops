import React from "react";
import redTrash from "../../Assets/red trash.png";
import greenTrash from "../../Assets/green trash.png";
import brownTrash from "../../Assets/brown trash.png";
import yellowTrash from "../../Assets/yellow trash.png";
const Dustbins = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-10">
      <img src={greenTrash} className="h-5/6" />
      <img src={redTrash} className="h-5/6" />
      <img src={brownTrash} />
      <img src={yellowTrash} />
    </div>
  );
};

export default Dustbins;
