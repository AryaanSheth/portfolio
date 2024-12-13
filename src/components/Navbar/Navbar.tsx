// src/components/Navbar/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/projects" className="navbar-item">
        Projects
      </Link>
      <Link to="/experience" className="navbar-item">
        Experience
      </Link>
    </div>
  );
};

export default Navbar;
