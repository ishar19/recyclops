import React from "react";
import PropTypes from "prop-types";
const Dispose = ({ category, info }) => {
  return (
    <div className="absolute top-[50vh] left-[50vw] z-10 w-3/4 translate-x-[-50%] translate-y-[-50%]  bg-gray-300 bg-opacity-60 p-8 text-center rounded-lg">
      <div className="opacity-100 ">

        <div className="mb-2 text-3xl font-bold font-dosis">{category}</div>
        <p className="font-semibold font-dosis">{info}</p>
      </div>
    </div>
  );
};

Dispose.propTypes = {
  category: PropTypes.string,
  info: PropTypes.string,
};

export default Dispose;
