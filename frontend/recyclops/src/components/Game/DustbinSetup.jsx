import React from "react";
import topGrass from "../../Assets/Grass.png";
import topPavement from "../../Assets/Pavement.png";
import bottomPavement from "../../Assets/BottomPavement.png";
import Dustbins from "./Dustbins";
const DustbinSetup = () => {
  return (
    <div className="z-10 ">
      <div className="absolute top-1/4 z-50 p-5">
        <Dustbins />
      </div>
      <div>
        <img src={topGrass} className="mb-0" />
        <img src={topPavement} className="absolute top-1/4 z-10" />
      </div>
      <div>
        <img src={bottomPavement} className="absolute top-3/4 z-10" />
      </div>
    </div>
  );
};

export default DustbinSetup;
