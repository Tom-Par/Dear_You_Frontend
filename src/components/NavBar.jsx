// src/components/NavBar.jsx
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Dear You 💌</Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/sticky-notes"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sticky Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/letters"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Letters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/self-care"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Self Care
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
