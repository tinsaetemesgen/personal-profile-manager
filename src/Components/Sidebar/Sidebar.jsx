import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiTool, FiFolder, FiSettings, FiLogOut } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="title">
        <h1>Profile Manager</h1>
      </div>
      <hr />

      <ul>
        <li>
          <NavLink to="/Dashboard">
            <FiHome className="icon" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/Profile">
            <FiUser className="icon" />
            Profile
          </NavLink> 
        </li>

        <li>
          <NavLink to="/Experiance">
            <FiTool className="icon" />
            Experiance
          </NavLink>
        </li>

        <li>
          <NavLink to="/Settings">
            <FiSettings className="icon" />
            Settings
          </NavLink>
        </li>
      </ul>

      <button className="logout-btn">
        <FiLogOut className="icon" />
        Logout</button>
    </div>
  );
}

export default Sidebar;
