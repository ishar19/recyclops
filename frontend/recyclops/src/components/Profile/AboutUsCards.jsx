import React from "react";
import PropTypes from "prop-types";
const AboutUsCard = ({ title, info }) => {
  return (
    <div className="m-5 rounded-md bg-gray-300 bg-opacity-5 p-5 font-dosis  drop-shadow-lg backdrop-blur-lg">
      <h1 className="text-center text-3xl font-medium text-greenPrimary">
        {title}
      </h1>
      <div className="text-xl font-light">{info}</div>
    </div>
  );
};
AboutUsCard.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

export default AboutUsCard;
