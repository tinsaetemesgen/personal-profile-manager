import { FiMoon, FiSun, FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Settings.css';
import { useEffect } from "react";


function Settings() {
  useEffect(() => {
  const toggle = document.getElementById("theme");

  const handleTheme = () => {
    document.body.classList.toggle("dark", toggle.checked);
    localStorage.setItem("theme", toggle.checked ? "dark" : "light");
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.checked = true;
  }

  if (toggle) toggle.addEventListener("change", handleTheme);

  return () => {
    if (toggle) toggle.removeEventListener("change", handleTheme);
  };
}, []);
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
              <FiSun className="icon" />

              <input type="checkbox" id="theme" />

              <span className="slider"></span>

              <FiMoon className="icon" />
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


          <h2 className="font-size">Font Size</h2>
        <div className="font">
          

          <div className="">
            <input type="radio" />
            <label htmlFor="small" className="fonts">Small</label>
          </div>
          <div className="">
            <input type="radio" />
            <label htmlFor="medium" className="fonts">Medium</label>
          </div>
          <div className="">
            <input type="radio" />
            <label htmlFor="large" className="fonts">Large</label>
          </div>
        </div>

    </div>
    </div>
    
  )
}

export default Settings;
