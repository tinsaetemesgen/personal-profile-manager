import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiTool, FiFolder, FiSettings, FiLogOut } from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
  
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="title">
        <h1>Profile Manager</h1>
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
          <NavLink to="/profile">
            <FiUser className="icon" />
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills">
            <FiTool className="icon" />
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects">
            <FiFolder className="icon" />
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            <FiSettings className="icon" />
            Settings
          </NavLink>
        </li>

       
        <li className="logout-item">
          <button onClick={handleLogout} className="logout-btn">
            <FiLogOut className="icon" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;