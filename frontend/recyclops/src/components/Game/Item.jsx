import React from "react";
import { useDraggable } from "@dnd-kit/core";
const Item = () => {
  const item = "item";
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
        // borderRadius: "9999px",
      }
    : { zIndex: 20, borderRadius: "9999px" };
  return (
    <div className="absolute bottom-[25vh] flex h-[32vh] w-[100vw] items-center justify-center bg-[#C2BB75]">
      <>
        <>
          <button
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            //   className="z-50 rounded-full bg-[#D9D9D9] p-7"
          >
            {item}
          </button>
        </>
      </>
    </div>
  );
};

export default Item;
