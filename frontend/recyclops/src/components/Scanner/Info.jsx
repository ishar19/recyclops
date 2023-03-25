import React from "react";
import Category from "./Category";
import Dispose from "./Dispose";
import Footer from "./Footer";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Info = ({ data, save, setSave }) => {
  const { scanInfo, scanId } = data;
  return (
    <div className="flex flex-col items-center">
      <Category category={scanInfo.category} color={scanInfo.color} />
      <Dispose category={scanInfo.class} info={scanInfo.info} />
      <Footer scanId={scanId} save={save} setSave={setSave} />
    </div>
  );
};
Info.propTypes = {
  data: PropTypes.any,
};
export default Info;
