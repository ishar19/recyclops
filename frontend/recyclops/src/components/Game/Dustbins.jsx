/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import redTrash from "../../Assets/red trash.png";
import greenTrash from "../../Assets/green trash.png";
import brownTrash from "../../Assets/brown trash.png";
import yellowTrash from "../../Assets/yellow trash.png";
import {
  closestCenter,
  pointerWithin,
  rectIntersection,
  useDroppable,
} from "@dnd-kit/core";
import Item from "./Item";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  //   rectangleIntersection,/
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
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const style = {
    color: isOver ? "green" : "red",
    width: isOver ? "320px" : "200px",
  };
  function handleDragEnd(event) {
    console.log(event);
    if (event.over && event.over.id !== null) {
      setIsDropped(true);
    }
  }
  const handleDragStart = (e) => setIsDropped(false);
  const handleDragOver = ({ active }) => console.log("dragOver");

  useEffect(() => {
    console.log(isDropped);
  }, [isDropped]);
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      sensors={sensors}
      collisionDetection={rectIntersection}
    >
      <Item />
      <Droppable id={"green"}>
        <img src={greenTrash} className="z-10 h-[20vh]" />
      </Droppable>
      <Droppable id={"red"}>
        <img src={redTrash} className=" z-10 h-[20vh]" />
      </Droppable>
      <Droppable id={"brown"}>
        <img src={brownTrash} className=" z-10 h-[20vh]" />
      </Droppable>
      <Droppable id={"yellow"}>
        <img src={yellowTrash} className=" z-10 h-[20vh]" />
      </Droppable>
    </DndContext>
  );
};

export default Dustbins;
const STYLES = {
  green: "absolute top-[15vh] left-[10vw] z-10 h-[20vh]",
  red: "absolute top-[15vh] right-[10vw] z-10 h-[20vh]",
  brown: "absolute bottom-[16vh] right-[10vw] z-10 h-[20vh]",
  yellow: "absolute bottom-[16vh] left-[10vw] z-10 h-[20vh]",
};
function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : "red",
  };

  return (
    <div ref={setNodeRef} style={style} className={`${STYLES[props.id]}`}>
      {props.children}
    </div>
  );
}
