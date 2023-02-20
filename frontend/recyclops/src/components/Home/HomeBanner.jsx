import React from "react";
import cardboard from "../../Assets/cardboard.png";
import glass from "../../Assets/glass.png";
import hazard from "../../Assets/hazard.png";
import metal from "../../Assets/metal.png";
import organic from "../../Assets/organic.png";
import paper from "../../Assets/paper.png";
import plastic from "../../Assets/plastic.png";
import "../../css/Banner.css";
const HomeBanner = () => {
  const dustbins = [organic, glass, paper, metal, plastic, hazard, cardboard];
  const renderDustbins = dustbins.map((dustbin, i) => (
    <img key={i} src={dustbin} alt={dustbin} className="h-[30vh]" />
  ));
  return (
    <div className="banner mx-auto my-4 flex h-[40vh] flex-shrink-0 gap-2 overflow-x-scroll p-5 py-4 scrollbar-hide lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300 lg:scrollbar-default">
      {renderDustbins}
    </div>
  );
};

export default HomeBanner;
