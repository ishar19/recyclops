import React from "react";
import PropTypes from "prop-types";
const CustomButton = ({ onClick, children }) => {
  return (
    <button
      className="flex h-[5vh] items-center justify-center rounded-md bg-greenPrimary px-3 py-1 text-white shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};
export default CustomButton;
