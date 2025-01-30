import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemType } from "../utils/dndHelpers";

const DraggableSection = ({ section, index, moveSection, enhanceContent, updatePrompt }) => {
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
      <input
        type="text"
        placeholder="Enter prompt for AI"
        value={section.prompt || ""}
        onChange={(e) => updatePrompt(index, e.target.value)}
        className="mt-2 p-2 border rounded w-full"
      />
      <button className="mt-2 p-2 bg-blue-500 text-white rounded" onClick={() => enhanceContent(index)}>
        Enhance with AI
      </button>
    </div>
  );
};

export default DraggableSection;
