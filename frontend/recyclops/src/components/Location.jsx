import React from "react";
import { MdLocationPin } from "react-icons/md";

const Location = () => {
  const dummyLocation = "Rithala";
  return (
    <div className="flex gap-2">
      <p className="text-xl">{dummyLocation}</p>
      <MdLocationPin size="32px" color="#34A853" />
    </div>
  );
};

export default Location;
