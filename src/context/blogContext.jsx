import React, { usecontext } from "react";
import blogs from "../data/data";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  return (
    <BlogContext.Provider value={{ blogs }}>
      {children}
    </BlogContext.Provider>
  );
}


