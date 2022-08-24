import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <span className="logo">Vertex</span>
      </div>
      <nav className="menus-container">
        <li>Home</li>
        <li>What we do</li>
        <li>Projects</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
    </div>
  );
}

export default Header;
