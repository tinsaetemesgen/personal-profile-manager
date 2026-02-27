import './Dashboard.css'
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      
      <div className="dashboard-page">
        <h2>Dashboard Page</h2>
        <Link to="/form">Add a new profile</Link>
      </div>
      
    </>


  )
}