import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header-container">
      <ul className="header-list">
        <li className="header-item"><Link to="/" className="header-link">Home</Link></li>
        <li className="header-item"><Link to="/about" className="header-link">About</Link></li>
        <li className="header-item"><Link to="/contact" className="header-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
