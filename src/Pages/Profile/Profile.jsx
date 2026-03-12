/* eslint-disable react-hooks/exhaustive-deps */
import './Profile.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Profile() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(stored);
  }, []);

  if (profiles.length === 0) {
    return (
      <div className="profile-container">
        <h2>No Profile Created Yet</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="link">
        <Link to="/" className="back-link">
          <FiArrowLeft /> Back to Dashboard
        </Link>
      </div>

      {profiles.map(profile => (
        <div className="profile-page" key={profile.id || profile.firstName}>
          <div className="profile-header">

            {/* Profile Image */}
            <div className="profile-avatar">
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={`${profile.firstName} ${profile.lastName}`}
                />
              ) : (
                <div className="placeholder-avatar">No Image</div>
              )}
            </div>

            {/* Profile Info */}
            <div className="profile-info">
              <h1>{profile.firstName} {profile.lastName}</h1>
              <h3>{profile.title}</h3>
            </div>
          </div>

          {/* Bio */}
          {profile.bio && <p className="bio">{profile.bio}</p>}

          {/* Contact Information */}
          <div className="profile-section">
            <h2>Contact Information</h2>
            {profile.email && <p>Email: {profile.email}</p>}
            {profile.phone && <p>Phone: {profile.phone}</p>}
            {profile.location && <p>Location: {profile.location}</p>}
            {profile.github && <p>GitHub: {profile.github}</p>}
            {profile.linkedin && <p>LinkedIn: {profile.linkedin}</p>}
            {profile.portfolio && <p>Portfolio: {profile.portfolio}</p>}
          </div>

          {/* Skills */}
          <div className="profile-section">
            <h2>Skills</h2>
            {profile.technicalSkills && <p><strong>Technical:</strong> {profile.technicalSkills}</p>}
            {profile.softSkills && <p><strong>Soft:</strong> {profile.softSkills}</p>}
          </div>

          {/* Edit Button */}
          <Link to={`/form?id=${profile.id || profile.firstName}`} className="edit-btn">
            Edit Profile
          </Link>

        </div>
      ))}
    </div>
  );
}
