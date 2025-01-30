import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableSection from "./DraggableSection";
import { enhanceContentWithAI } from "../utils/aiService";

const SectionList = () => {
  const [sections, setSections] = useState([
    { id: 1, content: "Title" },
    { id: 2, content: "Introduction" },
    { id: 3, content: "Body" },
  ]);

  const moveSection = (dragIndex, hoverIndex) => {
    const updatedSections = [...sections];
    const [movedSection] = updatedSections.splice(dragIndex, 1);
    updatedSections.splice(hoverIndex, 0, movedSection);
    setSections(updatedSections);
  };

  const enhanceContent = async (index) => {
    const updatedSections = [...sections];
    updatedSections[index].content = await enhanceContentWithAI(updatedSections[index].content);
    setSections(updatedSections);
  };

  const deleteSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-xl font-bold mb-4">AI-Powered Legal Document Editor</h1>
        {sections.map((section, index) => (
          <DraggableSection
            key={section.id}
            index={index}
            section={section}
            moveSection={moveSection}
            enhanceContent={enhanceContent}
            deleteSection={deleteSection}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default SectionList;
