import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="" className="logo">
          FURNITURE
        </NavLink>

        <div className="nav-menu">
          <NavLink to="/app" className="nav-link">Home</NavLink>
          <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>
          <NavLink to="/contacts" className="nav-button">Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
} 