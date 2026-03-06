import { Routes, Route } from "react-router-dom";
import { FiHome, FiUser, FiTool, FiFolder, FiSettings, FiLogOut, FiArrowLeftCircle, FiArrowDownLeft, FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Settings.css';


function Settings() {
  return (
    <div className="settings-page">
              <div className="link">
            <Link to="/" className="back-link">
            <FiArrowLeft />Back to Dashboard</Link>
        </div>

        <h1>Settings</h1>
        <p>Manage your profile, account settings, and application preferences here.</p>
        
    </div>
  )
}

export default Settings;
