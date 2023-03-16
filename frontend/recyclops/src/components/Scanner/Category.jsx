import React from "react";
import PropTypes from "prop-types";
const Category = ({ category, color }) => {
  return (
    <div className="absolute top-[10vh] left-[50vw]  flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center bg-opacity-60 p-8 text-center">

      <div className="mt-6 flex  gap-5">
        {category == "Dry" ? (
          <div className="trashBlue flex flex-col items-center rounded-md px-4 py-2 text-sm">
            <div className="font-bold font-dosis text-lg">Category</div>
            <div className="font-dosis text-lg">{category}</div>
          </div>
        ) : (
          <div className="trashGreen flex flex-col items-center rounded-md px-4 py-2 text-sm">
            <div className="font-bold font-dosis text-lg">Category</div>
            <div className="font-dosis text-lg">{category}</div>
          </div>
        )}

        <div
          className={`flex flex-col items-center rounded-md trash${color} px-4 py-2 text-sm opacity-100`}
        >
          <div className="font-bold font-dosis text-lg">Bin color</div>
          <div className="font-dosis text-lg">{color}</div>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.string,
  color: PropTypes.string,
};
export default Category;
