import './Dashboard.css'
import { Link } from 'react-router-dom'
import { FiPlus, FiUser, FiFolder, FiSettings, FiUsers } from "react-icons/fi"

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <Link to ="/profile" className="card-link">
            <FiUser className="card-icon" />
            <h3>Total Profiles</h3>
            <p><span id='counter'>0</span> Profiles Created</p>
          </Link>
        </div>

        <div className="dashboard-card">
         <Link to="/settings" className="card-link">
          <FiSettings className="card-icon" />
          <h3>Settings</h3>
          <p>Manage Preferences</p>
        </Link>
        </div>

        <div className="dashboard-card">
         <Link to="/form" className="add-profile-btn card-link">
          <FiPlus className="card-icon" />
          <h3>Create Profile</h3>
          <p>Add a new profile to your portfolio</p>
        </Link>
        </div>
        
      </div>

      
    </div>
  )
}