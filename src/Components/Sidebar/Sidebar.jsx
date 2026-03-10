import "./Sidebar.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // remove saved profile data
    localStorage.removeItem("profiles");
    localStorage.removeItem("experienceData");

    alert("Profile deleted");

    // redirect to dashboard
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="title">
        <Link to="/"><h1>Profile Manager</h1></Link>
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

      <button className="logout-btn" onClick={handleLogout}>
        <FiLogOut className="icon" />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;