import React, { useState } from "react";
import cardboard from "../../Assets/cardboard.png";
import glass from "../../Assets/glass.png";
import hazard from "../../Assets/hazard.png";
import metal from "../../Assets/metal.png";
import organic from "../../Assets/organic.png";
import paper from "../../Assets/paper.png";
import plastic from "../../Assets/plastic.png";
import "../../css/Banner.css";
import DustbinModal from "./DustbinModal";
const HomeBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState({});
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleDescription = (dustbin) => {
    switch (dustbin) {
      case organic:
        setDescription({
          bg: "bg-organic",
          title: "Organic Waste",
          info: "Biological waste, such as food scraps or yard waste, can be composted to create nutrient-rich soil. If you're unable to compost, this type of waste should be placed in a separate bin for pickup or taken to a composting facility.",
        });
        break;
      case glass:
        setDescription({
          bg: "bg-glass",
          title: "Glass",
          info: "Glass bottles and jars can be recycled, so it's important to rinse out any food or liquid residue before placing them in the recycling bin. Broken glass should be wrapped in paper or placed in a rigid container before disposal to avoid injury.",
        });
        break;
      case paper:
        setDescription({
          bg: "bg-paper",
          title: "Paper",
          info: "Most paper products can be recycled, including newspaper, office paper, and cardboard. Before recycling, make sure to remove any non-paper items like staples or plastic windows.",
        });
        break;
      case metal:
        setDescription({
          bg: "bg-metal",
          title: "Metal",
          info: "Most metal cans and containers can be recycled, so it's important to rinse out any food or liquid residue before placing them in the recycling bin. Larger metal items, such as appliances or furniture, may require special disposal methods, so check with your local waste management agency for more information.",
        });
        break;
      case plastic:
        setDescription({
          bg: "bg-plastic",
          title: "Plastic",
          info: "Most plastics can be recycled, but it's important to check with your local recycling program to see which types of plastics they accept. Some plastics can't be recycled, so it's best to avoid using them or find a local grocery store that has a plastic bag recycling program. If you're unable to recycle plastic, you can consider reusing it for other purposes before disposing of it in the trash.",
        });
        break;
      case hazard:
        setDescription({
          bg: "bg-hazard",
          title: "Hazard",
          info: "Batteries contain toxic chemicals and heavy metals that can be harmful to the environment if not disposed of properly. You should never throw batteries in the trash or incinerator as this can cause fires and release hazardous pollutants into the air. Instead, look for a battery recycling program in your area or contact your local waste management agency for information on how to dispose of batteries safely.",
        });
        break;
      case cardboard:
        setDescription({
          bg: "bg-cardboard",
          title: "Cardboard",
          info: "Cardboard can be recycled, so it's important to place it in the recycling bin instead of the trash. Before recycling, make sure to break down any cardboard boxes to save space and ensure that they can be processed more easily.",
        });
        break;
      default:
        setDescription({ title: "Recycle", info: "good for environment" });
    }
  };
  const dustbins = [organic, glass, paper, metal, plastic, hazard, cardboard];
  const renderDustbins = dustbins.map((dustbin, i) => (
    <img
      key={i}
      src={dustbin}
      alt={dustbin}
      onClick={() => {
        handleModal();
        handleDescription(dustbin);
      }}
      className="h-[30vh]"
    />
  ));
  return (
    <div>
      <div className="banner mx-auto my-4 flex h-[40vh] flex-shrink-0 gap-2 overflow-x-scroll p-5 py-4 scrollbar-hide lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300 lg:scrollbar-default">
        {renderDustbins}
      </div>
      {showModal && (
        <DustbinModal handleModal={handleModal} description={description} />
      )}
    </div>
  );
};

export default HomeBanner;
