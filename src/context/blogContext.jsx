import React, { createContext, useContext, useState } from "react";
import blogsData from "../data/data";

export const BlogContext = createContext(null);

export function BlogProvider({ children }) {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <BlogContext.Provider
      value={{
        blogs: blogsData,
        selectedBlog,
        setSelectedBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export const useBlogs = () => useContext(BlogContext);


