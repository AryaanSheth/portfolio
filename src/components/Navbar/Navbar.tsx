import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <a href="#home" className="navbar-item">
        Home
      </a>
      <a href="#projects" className="navbar-item">
        Projects
      </a>
      <a href="#experience" className="navbar-item">
        Experience
      </a>
    </div>
  );
};

export default Navbar;
