import { Routes, Route } from "react-router-dom";
import { FiHome, FiUser, FiTool, FiFolder, FiSettings, FiLogOut, FiArrowLeftCircle, FiArrowDownLeft, FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Settings() {
  return (
    <div className="experiace-page">
              <div className="link">
            <Link to="/" className="back-link">
            <FiArrowLeft />Back to Dashboard</Link>
        </div>
    </div>
  )
}

export default Settings;
