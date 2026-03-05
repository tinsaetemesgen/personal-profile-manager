import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-nav">
        <Link to="/" className="back-link">
          <FiArrowLeft /> Back to Dashboard
        </Link>
      </div>
      
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your personal information</p>
      </div>

      <div className="profile-content">
        {/* Form will be imported here later */}
        <p>Form will be displayed here</p>
      </div>
    </div>
  );
}

export default Profile;
