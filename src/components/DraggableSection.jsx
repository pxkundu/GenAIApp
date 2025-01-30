import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemType } from "../utils/dndHelpers";

const DraggableSection = ({ section, index, moveSection, enhanceContent, deleteSection }) => {
  const ref = useRef(null);
  
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveSection(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`p-4 bg-white border rounded-md mb-2 cursor-move ${isDragging ? "opacity-50" : ""}`}
    >
      <p>{section.content}</p>
      <button onClick={() => enhanceContent(index)} className="mt-2 p-2 bg-blue-500 text-white rounded">Enhance with AI</button>
      <button onClick={() => deleteSection(index)} className="mt-2 ml-2 p-2 bg-red-500 text-white rounded">Delete</button>
    </div>
  );
};

export default DraggableSection;
