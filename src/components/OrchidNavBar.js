import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function OrchidNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);

  return (
    <div className="navWrapper">
      <div
        className={`burger ${isMenuOpen ? "open" : ""}`}
        id="burger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="logo">
        <Link to="/">My Orchid Garden</Link>
      </div>

      <div className={`navigation ${isMenuOpen ? "show" : ""}`}>
        <NavLink
          className={(navClass) => (navClass.isActive ? "active_link" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navClass) => (navClass.isActive ? "active_link" : "")}
          to="/about"
        >
          About Orchids
        </NavLink>
        <NavLink
          className={(navClass) => (navClass.isActive ? "active_link" : "")}
          to="/orchidcollection"
        >
          Orchid Collection
        </NavLink>
        <NavLink
          className={(navClass) => (navClass.isActive ? "active_link" : "")}
          to="/addorchid"
        >
          Add an Orchid
        </NavLink>
      </div>
    </div>
  );
}

export default OrchidNavBar;
