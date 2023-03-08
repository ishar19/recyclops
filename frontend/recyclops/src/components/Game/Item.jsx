import React from "react";
import PropTypes from "prop-types";
import { useDraggable } from "@dnd-kit/core";
const Item = ({ src }) => {
  //   const item = "item";
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
    data: {
      type: "trash",
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 20,
      }
    : { zIndex: 20, borderRadius: "9999px" };
  return (
    <div className="absolute bottom-[30vh] flex h-[25vh] w-[100vw] items-center justify-center bg-[#C2BB75]">
      <>
        <>
          <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <img src={src} className=" bottom-4h-[150px] relative w-[150px]" />
          </div>
        </>
      </>
    </div>
  );
};
Item.propTypes = {
  src: PropTypes.string,
};

export default Item;
