import React, { useState, useEffect } from "react";
import { getHumanDate } from "../../utils/getHumanDate";
import PropTypes from "prop-types";
import cardboard from "../../Assets/cardboard.png";
import glass from "../../Assets/glass.png";
import hazard from "../../Assets/hazard.png";
import metal from "../../Assets/metal.png";
import organic from "../../Assets/organic.png";
import paper from "../../Assets/paper.png";
import plastic from "../../Assets/plastic.png";

const RecentScansModal = ({ handleModal, scan }) => {
  const [scanContent, setScanContent] = useState({});
  const categoryChecker = (category) => {
    switch (category) {
      case "Organic":
        setScanContent({
          description:
            "Biological waste, such as food scraps or yard waste, can be composted to create nutrient-rich soil. If you're unable to compost, this type of waste should be placed in a separate bin for pickup or taken to a composting facility.",
          dustbin: organic,
          bg: "bg-organic",
        });
        break;
      case "Glass":
        setScanContent({
          description:
            "Glass bottles and jars can be recycled, so it's important to rinse out any food or liquid residue before placing them in the recycling bin. Broken glass should be wrapped in paper or placed in a rigid container before disposal to avoid injury.",
          dustbin: glass,
          bg: "bg-glass",
        });
        break;
      case "Paper":
        setScanContent({
          description:
            "Most paper products can be recycled, including newspaper, office paper, and cardboard. Before recycling, make sure to remove any non-paper items like staples or plastic windows.",
          dustbin: paper,
          bg: "bg-paper",
        });
        break;
      case "Metal":
        setScanContent({
          description:
            "Most metal cans and containers can be recycled, so it's important to rinse out any food or liquid residue before placing them in the recycling bin. Larger metal items, such as appliances or furniture, may require special disposal methods, so check with your local waste management agency for more information.",
          dustbin: metal,
          bg: "bg-metal",
        });
        break;
      case "Plastic":
        setScanContent({
          description:
            "Most plastics can be recycled, but it's important to check with your local recycling program to see which types of plastics they accept. Some plastics can't be recycled, so it's best to avoid using them or find a local grocery store that has a plastic bag recycling program. If you're unable to recycle plastic, you can consider reusing it for other purposes before disposing of it in the trash.",
          dustbin: plastic,
          bg: "bg-plastic",
        });
        break;
      case "Hazard":
        setScanContent({
          description:
            "Batteries contain toxic chemicals and heavy metals that can be harmful to the environment if not disposed of properly. You should never throw batteries in the trash or incinerator as this can cause fires and release hazardous pollutants into the air. Instead, look for a battery recycling program in your area or contact your local waste management agency for information on how to dispose of batteries safely.",
          dustbin: hazard,
          bg: "bg-hazard",
        });
        break;
      case "Cardboard":
        setScanContent({
          description:
            "Cardboard can be recycled, so it's important to place it in the recycling bin instead of the trash. Before recycling, make sure to break down any cardboard boxes to save space and ensure that they can be processed more easily.",
          dustbin: cardboard,
          bg: "bg-cardboard",
        });
        break;
    }
  };
  useEffect(() => {
    categoryChecker(scan["scanData"]["class"]);
  }, [scan]);
  return (
    <div className="fixed inset-0  z-50 mx-auto flex w-[70%] items-center justify-center overflow-y-auto shadow-lg outline-none overflow-x-hidden focus:outline-none">
      <div className="relative my-6 mx-auto w-auto max-w-3xl">
        <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
          <div
            className={`flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 trash${scan["scanData"]["color"]}`}
          >
            <h3 className="font=semibold text-3xl text-white">
              {scan["scanData"]["class"]}
            </h3>
            <button
              className="float-right border-0 bg-transparent text-black"
              onClick={handleModal}
            >
              <span className="opacity-7 block h-6 w-6  py-0 text-2xl text-white">
                x
              </span>
            </button>
          </div>
          <div className="relative flex-auto p-6">
            <div className="flex flex-col items-center">
              <img
                src={scan["scanInfo"]["publicURL"]}
                className="h-[30vh]"
                alt={scan["scanInfo"]["publicURL"]}
              />
              <div className="mx-auto self-start text-2xl">
                Date: {getHumanDate(scan["scanInfo"]["createdAt"]["seconds"])}
              </div>
              <div className="flex flex-col pt-2">
                <img
                  src={scanContent.dustbin}
                  className="h-[200px]"
                  alt={scan.category}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
RecentScansModal.propTypes = {
  handleModal: PropTypes.func,
  scan: PropTypes.object,
};
export default RecentScansModal;
