import React from "react";
import topGrass from "../../Assets/Grass.png";
import topPavement from "../../Assets/Pavement.png";
import bottomPavement from "../../Assets/BottomPavement.png";
import Dustbins from "./Dustbins";
const DustbinSetup = () => {
  return (
    <div className="">
      <Dustbins />
      <div>
        <img src={topGrass} className="absolute top-[14vh]" />
        <img src={topPavement} className="absolute top-[30vh] " />
      </div>
      <div>
        <img src={bottomPavement} className="absolute bottom-[7vh]" />
      </div>
    </div>
  );
};

export default DustbinSetup;
