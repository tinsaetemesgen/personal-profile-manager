import './Dashboard.css'
import { Link } from 'react-router-dom'
import { FiPlus, FiUser, FiFolder, FiSettings } from "react-icons/fi"

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <FiUser className="card-icon" />
          <h3>Total Profiles</h3>
          <p>0 Profiles Created</p>
        </div>

        <div className="dashboard-card">
          <FiSettings className="card-icon" />
          <h3>Settings</h3>
          <p>Manage Preferences</p>
        </div>
        <Link to="/form" className="add-profile-btn">
          <FiPlus />
          Add New Profile
        </Link>
      </div>

      
    </div>
  )
}