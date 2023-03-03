import React from "react";
import topGrass from "../../Assets/Grass.png";
import topPavement from "../../Assets/Pavement.png";
import bottomPavement from "../../Assets/BottomPavement.png";
import Dustbins from "./Dustbins";

// eslint-disable-next-line react/prop-types
const DustbinSetup = ({ user }) => {
  // eslint-disable-next-line no-unused-vars
  return (
    <div>
      <Dustbins user={user} />
      <div>
        <img src={topGrass} className="absolute top-[14vh]" />
        <img src={topPavement} className="absolute top-[30vh] " />
      </div>
      <div>
        <img src={bottomPavement} className="absolute bottom-[7vh]" />
      </div>
      <div className="absolute bottom-0 h-[7.5vh] w-full bg-greenPrimary"></div>
    </div>
  );
};

export default DustbinSetup;
