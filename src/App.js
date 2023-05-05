import React from "react";
import { Route, Routes } from "react-router-dom";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Nopage from "./pages/Nopage";
import Home from "./pages/Home";
import "./pages/Style.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/project" element={<Project />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
  );
}

export default App;
