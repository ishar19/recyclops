import React from "react";

const Category = () => {
  return (
    <div className="absolute top-[10vh] left-[50vw]  flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center bg-opacity-60 p-8 text-center">
      <h1 className="text-3xl text-white">Trash Category</h1>
      <div className="mt-6 flex gap-5">
        <div className="flex flex-col items-center rounded-md bg-gray-300 px-4 py-2 text-sm">
          DRY OR WET <div>(blue/green)</div>
        </div>
        <div className="flex items-center rounded-md bg-gray-300 px-2 text-sm">
          TRASH COLOR CODE
        </div>
      </div>
    </div>
  );
};

export default Category;
