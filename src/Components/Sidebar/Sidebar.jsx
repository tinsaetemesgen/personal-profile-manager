import "./Sidebar.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("profiles");
    localStorage.removeItem("experienceData");
    alert("Profile deleted");
    navigate("/");
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "visible" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="title">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h1>Profile Manager</h1>
          </Link>
        </div>

        <hr />

        <ul>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <FiHome className="icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/Profile" onClick={() => setIsOpen(false)}>
              <FiUser className="icon" /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/Settings" onClick={() => setIsOpen(false)}>
              <FiSettings className="icon" /> Settings
            </NavLink>
          </li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut className="icon" /> Logout
        </button>
      </div>
    </>
  );
}

export default Sidebar;
