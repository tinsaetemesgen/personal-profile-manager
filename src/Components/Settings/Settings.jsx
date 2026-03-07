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
        <p>Manage your profile settings and application preferences here.</p>
        
          <div className="theme-option">
            <h2>Theme Preference</h2>

            <label className="theme-toggle">
              <FiSun className="sun" />

              <input type="checkbox" id="theme" />

              <span className="slider"></span>

              <FiMoon className="moon" />
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



        <div className="font">
          <h2>Font Size</h2>

          <input type="radio" />
          <label htmlFor="small">Small</label>
          <input type="radio" />
          <label htmlFor="medium">Medium</label>
          <input type="radio" />
          <label htmlFor="large">Large</label>

        </div>

    </div>
    </div>
    
  )
}

export default Settings;
