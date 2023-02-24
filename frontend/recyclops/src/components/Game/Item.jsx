import React from "react";

const Item = () => {
  const item = "item";
  return (
    <div className="absolute top-[43gvh]  flex h-[32vh] w-[100vw] items-center justify-center bg-[#C2BB75]">
      <div className="rounded-full bg-[#D9D9D9] p-10">{item}</div>
    </div>
  );
};

export default Item;