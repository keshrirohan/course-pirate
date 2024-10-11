import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/AboutUs";
import Learning from "./Component/learning";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </div>
  );
}

export default App;
