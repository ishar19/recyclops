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
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <img
        src={src}
        className="absolute top-[50vh] left-[50vw] h-[100px] w-[100px] translate-x-[-50%]"
      />
    </div>
  );
};
Item.propTypes = {
  src: PropTypes.string,
};

export default Item;
