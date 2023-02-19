import React from "react";
import Category from "./Category";
import Dispose from "./Dispose";
import Footer from "./Footer";

const Info = () => {
  console.log("info");
  return (
    <div className="flex flex-col items-center">
      <Category />
      <Dispose />
      <Footer />
    </div>
  );
};

export default Info;
