/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import redTrash from "../../Assets/red trash.png";
// import greenTrash from "../../Assets/green trash.png";
import brownTrash from "../../Assets/brown trash.png";
import yellowTrash from "../../Assets/yellow trash.png";
import { useDroppable } from "@dnd-kit/core";
import Item from "./Item";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
// import { Droppable } from "./Droppable";
const Dustbins = () => {
  const { isOver, setNodeRef: setFirstDroppableRef } = useDroppable({
    id: "droppable",
    data: {
      accepts: ["trash"],
    },
  });
  const [isDropped, setIsDropped] = useState(false);
  console.log(isDropped);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const style = {
    color: isOver ? "green" : "red",
    width: isOver ? "320px" : "200px",
  };
  function handleDragEnd(event) {
    console.log("end");
    console.log(event);
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
  const handleDragStart = (e) => console.log(e);
  const handleDragOver = ({ active }) => console.log("dragOver");

  useEffect(() => {
    console.log("dropped in red trash");
  }, [isDropped]);
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      sensors={sensors}
      collisionDetection={closestCenter}
    >
      <Item />
      {/* <div
        ref={setFirstDroppableRef}
        style={style}
        id="droppable"
        className="absolute top-[15vh] right-[10vw] z-20 h-[20vh] bg-red-600"
      >
        <img src={greenTrash} /> 
        <div
          className="absolute top-[15vh] right-[10vw] z-10 h-[20vh]"
          style={style}
        >
          Drop here
        </div>
        <div className="h-[100%] w-[100%]">Drop here</div>
      </div> */}
      <Droppable>
        {isDropped ? (
          <img
            src={redTrash}
            className="absolute top-[15vh] right-[10vw] z-10 h-[20vh]"
          />
        ) : (
          <img
            src={redTrash}
            className="absolute top-[15vh] right-[10vw] z-10 h-[20vh]"
          />
        )}
      </Droppable>
      <img
        src={redTrash}
        className="absolute top-[15vh] left-[10vw] z-10 h-[20vh]"
      />
      <img
        src={brownTrash}
        className="absolute bottom-[16vh] right-[10vw] z-10 h-[20vh]"
      />
      <img
        src={yellowTrash}
        className="absolute bottom-[16vh] left-[10vw] z-10 h-[20vh]"
      />
    </DndContext>
  );
};

export default Dustbins;

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
