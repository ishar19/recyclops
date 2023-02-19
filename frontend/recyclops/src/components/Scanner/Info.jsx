import React from "react";
import Category from "./Category";
import Dispose from "./Dispose";

const Info = () => {
  console.log("info");
  return (
    <div className="flex flex-col items-center">
      <Category />
      <Dispose />
    </div>
  );
};

export default Info;
