import React, { createContext, useState } from "react";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [sections, setSections] = useState([]);

  return (
    <DocumentContext.Provider value={{ sections, setSections }}>
      {children}
    </DocumentContext.Provider>
  );
};
