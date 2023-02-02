import React from "react";
import { MdLocationPin } from "react-icons/md";

const Location = () => {
  const dummyLocation = "Rithala";
  return (
    <div className="flex items-center gap-2">
      <p className="text-xl underline underline-offset-4">{dummyLocation}</p>
      <MdLocationPin size="32px" color="#34A853" />
    </div>
  );
};

export default Location;
