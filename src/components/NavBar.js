import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="navbar-brand">Conversor em React</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/">
              <span className="nav-link">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato">
              <span className="nav-link">Contato</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
