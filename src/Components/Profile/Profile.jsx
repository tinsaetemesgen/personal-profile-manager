import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiEdit2 } from 'react-icons/fi';
import './Profile.css';

function Profile() {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        // Personal Information
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        bio: '',
        profileImage: null,
        
        // Contact Information
        email: '',
        phone: '',
        location: '',
        github: '',
        linkedin: '',
        
        // Professional Summary
        title: '',
        experienceYears: '',
        summaryText: '',
        
        // Education
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startYear: '',
        endYear: '',
        
        // Work Experience
        jobTitle: '',
        company: '',
        employmentType: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
        technologies: '',
        
        // Projects
        projectName: '',
        projectDescription: '',
        projectLink: '',
        
        // Skills
        technicalSkills: '',
        softSkills: ''
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        console.log('Saved Profile:', formData);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

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
                {!isEditing && (
                    <button onClick={handleEdit} className="edit-profile-btn">
                        <FiEdit2 /> Edit Profile
                    </button>
                )}
            </div>

            <div className="profile-content">
                {isEditing ? (
                    <form onSubmit={handleSubmit} className="profile-form">
                        {/* PERSONAL INFORMATION */}
                        <div className="form-section">
                            <h2>Personal Information</h2>
                            
                            <div className="form-group">
                                <label>Profile Picture:</label>
                                <input 
                                    type="file" 
                                    name="profileImage"
                                    onChange={handleChange}
                                    accept="image/*"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter first name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter last name"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date of Birth:</label>
                                    <input 
                                        type="date" 
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Gender:</label>
                                    <select 
                                        name="gender" 
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Prefer not to say</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Short Bio:</label>
                                <textarea 
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Write a short professional bio..."
                                />
                            </div>
                        </div>

                        {/* CONTACT INFORMATION */}
                        <div className="form-section">
                            <h2>Contact Information</h2>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number:</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Location (City, Country):</label>
                                <input 
                                    type="text" 
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="e.g. New York, USA"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>GitHub URL:</label>
                                    <input 
                                        type="url" 
                                        name="github"
                                        value={formData.github}
                                        onChange={handleChange}
                                        placeholder="https://github.com/username"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>LinkedIn URL:</label>
                                    <input 
                                        type="url" 
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        placeholder="https://linkedin.com/in/username"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* PROFESSIONAL SUMMARY */}
                        <div className="form-section">
                            <h2>Professional Summary</h2>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Professional Title:</label>
                                    <input 
                                        type="text" 
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g. Frontend Developer"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Years of Experience:</label>
                                    <input 
                                        type="number" 
                                        name="experienceYears"
                                        value={formData.experienceYears}
                                        onChange={handleChange}
                                        min="0"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Career Summary:</label>
                                <textarea 
                                    name="summaryText"
                                    value={formData.summaryText}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Summarize your career..."
                                />
                            </div>
                        </div>

                        {/* EDUCATION */}
                        <div className="form-section">
                            <h2>Education</h2>

                            <div className="form-group">
                                <label>Institution Name:</label>
                                <input 
                                    type="text" 
                                    name="institution"
                                    value={formData.institution}
                                    onChange={handleChange}
                                    placeholder="University/School name"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Degree:</label>
                                    <input 
                                        type="text" 
                                        name="degree"
                                        value={formData.degree}
                                        onChange={handleChange}
                                        placeholder="e.g. Bachelor of Science"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Field of Study:</label>
                                    <input 
                                        type="text" 
                                        name="fieldOfStudy"
                                        value={formData.fieldOfStudy}
                                        onChange={handleChange}
                                        placeholder="e.g. Computer Science"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Start Year:</label>
                                    <input 
                                        type="number" 
                                        name="startYear"
                                        value={formData.startYear}
                                        onChange={handleChange}
                                        placeholder="2020"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>End Year:</label>
                                    <input 
                                        type="number" 
                                        name="endYear"
                                        value={formData.endYear}
                                        onChange={handleChange}
                                        placeholder="2024"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* WORK EXPERIENCE */}
                        <div className="form-section">
                            <h2>Work Experience</h2>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Job Title:</label>
                                    <input 
                                        type="text" 
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        placeholder="e.g. Frontend Developer"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Company Name:</label>
                                    <input 
                                        type="text" 
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company name"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Employment Type:</label>
                                <select 
                                    name="employmentType" 
                                    value={formData.employmentType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Type</option>
                                    <option value="fulltime">Full-Time</option>
                                    <option value="parttime">Part-Time</option>
                                    <option value="internship">Internship</option>
                                    <option value="freelance">Freelance</option>
                                    <option value="contract">Contract</option>
                                </select>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Start Date:</label>
                                    <input 
                                        type="month" 
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>End Date:</label>
                                    <input 
                                        type="month" 
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Responsibilities:</label>
                                <textarea 
                                    name="responsibilities"
                                    value={formData.responsibilities}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Describe your responsibilities..."
                                />
                            </div>

                            <div className="form-group">
                                <label>Technologies Used:</label>
                                <input 
                                    type="text" 
                                    name="technologies"
                                    value={formData.technologies}
                                    onChange={handleChange}
                                    placeholder="React, Node.js, MySQL, etc."
                                />
                            </div>
                        </div>

                        {/* PROJECTS */}
                        <div className="form-section">
                            <h2>Projects</h2>

                            <div className="form-group">
                                <label>Project Name:</label>
                                <input 
                                    type="text" 
                                    name="projectName"
                                    value={formData.projectName}
                                    onChange={handleChange}
                                    placeholder="Project name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Project Description:</label>
                                <textarea 
                                    name="projectDescription"
                                    value={formData.projectDescription}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Describe your project..."
                                />
                            </div>

                            <div className="form-group">
                                <label>Project Link:</label>
                                <input 
                                    type="url" 
                                    name="projectLink"
                                    value={formData.projectLink}
                                    onChange={handleChange}
                                    placeholder="GitHub or live demo URL"
                                />
                            </div>
                        </div>

                        {/* SKILLS */}
                        <div className="form-section">
                            <h2>Skills</h2>

                            <div className="form-group">
                                <label>Technical Skills:</label>
                                <input 
                                    type="text" 
                                    name="technicalSkills"
                                    value={formData.technicalSkills}
                                    onChange={handleChange}
                                    placeholder="JavaScript, React, CSS, Python, etc."
                                />
                            </div>

                            <div className="form-group">
                                <label>Soft Skills:</label>
                                <input 
                                    type="text" 
                                    name="softSkills"
                                    value={formData.softSkills}
                                    onChange={handleChange}
                                    placeholder="Communication, Leadership, Teamwork, etc."
                                />
                            </div>
                        </div>

                        <button type="submit" className="save-btn">Save Profile</button>
                    </form>
                ) : (
                    <div className="profile-display">
                        {/* Display Profile Picture */}
                        {formData.profileImage && (
                            <div className="display-profile-pic">
                                <img src={URL.createObjectURL(formData.profileImage)} alt="Profile" />
                            </div>
                        )}

                        {/* PERSONAL INFORMATION DISPLAY */}
                        <div className="display-section">
                            <h2>Personal Information</h2>
                            <div className="display-grid">
                                <div className="display-item">
                                    <label>First Name:</label>
                                    <p>{formData.firstName || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Last Name:</label>
                                    <p>{formData.lastName || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Date of Birth:</label>
                                    <p>{formData.dob || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Gender:</label>
                                    <p>{formData.gender || 'Not provided'}</p>
                                </div>
                                <div className="display-item full-width">
                                    <label>Bio:</label>
                                    <p>{formData.bio || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT INFORMATION DISPLAY */}
                        <div className="display-section">
                            <h2>Contact Information</h2>
                            <div className="display-grid">
                                <div className="display-item">
                                    <label>Email:</label>
                                    <p>{formData.email || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Phone:</label>
                                    <p>{formData.phone || 'Not provided'}</p>
                                </div>
                                <div className="display-item full-width">
                                    <label>Location:</label>
                                    <p>{formData.location || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>GitHub:</label>
                                    <p>{formData.github || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>LinkedIn:</label>
                                    <p>{formData.linkedin || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>

                        {/* PROFESSIONAL SUMMARY DISPLAY */}
                        <div className="display-section">
                            <h2>Professional Summary</h2>
                            <div className="display-grid">
                                <div className="display-item">
                                    <label>Title:</label>
                                    <p>{formData.title || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Experience:</label>
                                    <p>{formData.experienceYears ? formData.experienceYears + ' years' : 'Not provided'}</p>
                                </div>
                                <div className="display-item full-width">
                                    <label>Summary:</label>
                                    <p>{formData.summaryText || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>

                        {/* EDUCATION DISPLAY */}
                        <div className="display-section">
                            <h2>Education</h2>
                            <div className="display-grid">
                                <div className="display-item">
                                    <label>Institution:</label>
                                    <p>{formData.institution || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Degree:</label>
                                    <p>{formData.degree || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Field of Study:</label>
                                    <p>{formData.fieldOfStudy || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Start Year:</label>
                                    <p>{formData.startYear || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>End Year:</label>
                                    <p>{formData.endYear || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>

                        {/* WORK EXPERIENCE DISPLAY */}
                        <div className="display-section">
                            <h2>Work Experience</h2>
                            <div className="display-grid">
                                <div className="display-item">
                                    <label>Job Title:</label>
                                    <p>{formData.jobTitle || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Company:</label>
                                    <p>{formData.company || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Employment Type:</label>
                                    <p>{formData.employmentType || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Start Date:</label>
                                    <p>{formData.startDate || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>End Date:</label>
                                    <p>{formData.endDate || 'Not provided'}</p>
                                </div>
                                <div className="display-item full-width">
                                    <label>Responsibilities:</label>
                                    <p>{formData.responsibilities || 'Not provided'}</p>
                                </div>
                                <div className="display-item full-width">
                                    <label>Technologies:</label>
                                    <p>{formData.technologies || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>

                        {/* PROJECTS DISPLAY */}
                        <div className="display-section">
                            <h2>Projects</h2>
                            <div className="display-grid">
                                <div className="display-item full-width">
                                    <label>Project Name:</label>
                                    <p>{formData.projectName || 'Not provided'}</p>
                                </div>
                                <div className="display-item full-width">
                                    <label>Description:</label>
                                    <p>{formData.projectDescription || 'Not provided'}</p>
                                </div>
                                <div className="display-item full-width">
                                    <label>Project Link:</label>
                                    <p>{formData.projectLink || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>

                        {/* SKILLS DISPLAY */}
                        <div className="display-section">
                            <h2>Skills</h2>
                            <div className="display-grid">
                                <div className="display-item">
                                    <label>Technical Skills:</label>
                                    <p>{formData.technicalSkills || 'Not provided'}</p>
                                </div>
                                <div className="display-item">
                                    <label>Soft Skills:</label>
                                    <p>{formData.softSkills || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;