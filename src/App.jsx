import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/shop"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />

    </Routes>
  )
}

export default App