import React from "react";
import PropTypes from "prop-types";
const Neomorph = ({ content }) => {
  return <button>{content}</button>;
};

Neomorph.propTypes = {
  content: PropTypes.any,
};
export default Neomorph;
