import { Routes, Route } from "react-router-dom";
import { FiMoon, FiSun, FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Settings.css';


function Settings() {
  return (

    <div className="setting-container">
      <div className="settings-page">
              <div className="link">
            <Link to="/" className="back-link">
            <FiArrowLeft />Back to Dashboard</Link>
        </div>

        <h1>Settings</h1>
        <p>Manage your profile, account settings, and application preferences here.</p>
        
        <div className="theme-option">
          <input type="radio" id="light" name="theme" />
            <label htmlFor="light">
            <FiSun /> Light
          </label>

          <input type="radio" id="dark" name="theme" />
          <label htmlFor="dark">
            <FiMoon /> Dark
          </label>
        </div>

        <div className="language">
          <h2>Language</h2>
          <select name="lang" id="">
            <option value="englishus">English (us)</option>
            <option value="englishuk">English (uk)</option>
            <option value="french">French</option>
            <option value="amharic">Amharic</option>
          </select>
        </div>
    </div>
    </div>
    
  )
}

export default Settings;
