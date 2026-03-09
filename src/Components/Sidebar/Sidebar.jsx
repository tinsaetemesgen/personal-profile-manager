import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiTool, FiFolder, FiSettings, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="title">
        <Link to='/' ><h1>Profile Manager</h1></Link>
      </div>
      <hr />

      <ul>
        <li>
          <NavLink to="/">
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
