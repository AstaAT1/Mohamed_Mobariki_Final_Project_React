import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { BlogProvider } from "./context/blogContext";
import  CartProvider  from "./context/cartContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>
)