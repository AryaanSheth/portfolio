import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          padding: "0 24px",
          maxWidth: 680,
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experiences />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
