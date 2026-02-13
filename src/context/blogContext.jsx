import React, { createContext } from "react";
import blogs from "../data/data";

export const BlogContext = createContext(null)
export function BlogProvider({ children }) {
  return (
    <BlogContext.Provider value={{ blogs }}>
      {children}
    </BlogContext.Provider>
  );
}


