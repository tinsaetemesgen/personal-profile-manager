import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Form from '../Form/Form';
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
        <Form />
      </div>
    </div>
  );
}

export default Profile;