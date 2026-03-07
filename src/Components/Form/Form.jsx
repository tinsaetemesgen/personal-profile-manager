import React, { useState } from 'react';
import './Form.css';

function Form({ onSave, initialData = null }) {
    const [formData, setFormData] = useState( initialData || {
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
        screenshot: null,
        
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
        onSave(formData);
    };
   

    return (
        <section className="form-section">
            <form className="form" onSubmit={handleSubmit}>
               
                <div className="personal">
                    <h2>Personal Information</h2>

                    <label>Profile Picture:</label>
                    <input type="file" name="profileImage" onChange={handleChange} />

                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Prefer not to say</option>
                    </select>

                    <label>Short Bio:</label>
                    <textarea name="bio" rows="4" value={formData.bio} onChange={handleChange} placeholder="Write a short professional bio..." />
                </div>

                
                <div className="contact">
                    <h2>Contact Information</h2>

                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />

                    <label>Location (City, Country):</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} />

                    <label>GitHub URL:</label>
                    <input type="url" name="github" value={formData.github} onChange={handleChange} />

                    <label>LinkedIn URL:</label>
                    <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
                </div>

                
                <div className="summary">
                    <h2>Professional Summary</h2>

                    <label>Professional Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Frontend Developer" />

                    <label>Years of Experience:</label>
                    <input type="number" name="experienceYears" min="0" value={formData.experienceYears} onChange={handleChange} />

                    <label>Career Summary:</label>
                    <textarea name="summaryText" rows="4" value={formData.summaryText} onChange={handleChange} />
                </div>

                
                <div className="education">
                    <h2>Education</h2>

                    <label>Institution Name:</label>
                    <input type="text" name="institution" value={formData.institution} onChange={handleChange} />

                    <label>Degree:</label>
                    <input type="text" name="degree" value={formData.degree} onChange={handleChange} />

                    <label>Field of Study:</label>
                    <input type="text" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} />

                    <label>Start Year:</label>
                    <input type="number" name="startYear" value={formData.startYear} onChange={handleChange} />

                    <label>End Year:</label>
                    <input type="number" name="endYear" value={formData.endYear} onChange={handleChange} />
                </div>

                
                <div className="experience">
                    <h2>Work Experience</h2>

                    <label>Job Title:</label>
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />

                    <label>Company Name:</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} />

                    <label>Employment Type:</label>
                    <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
                        <option value="">Select Type</option>
                        <option value="fulltime">Full-Time</option>
                        <option value="parttime">Part-Time</option>
                        <option value="internship">Internship</option>
                        <option value="freelance">Freelance</option>
                    </select>

                    <label>Start Date:</label>
                    <input type="month" name="startDate" value={formData.startDate} onChange={handleChange} />

                    <label>End Date:</label>
                    <input type="month" name="endDate" value={formData.endDate} onChange={handleChange} />

                    <label>Responsibilities:</label>
                    <textarea name="responsibilities" rows="4" value={formData.responsibilities} onChange={handleChange} />

                    <label>Technologies Used:</label>
                    <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} placeholder="React, Node.js, MySQL..." />
                </div>
                
                <div className="projects">
                    <h2>Projects</h2>

                    <label>Project Name:</label>
                    <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />

                    <label>Screenshot:</label>
                    <input type="file" name="screenshot" onChange={handleChange} />

                    <label>Project Description:</label>
                    <textarea name="projectDescription" rows="4" value={formData.projectDescription} onChange={handleChange} />

                    <label>Project Link:</label>
                    <input type="url" name="projectLink" value={formData.projectLink} onChange={handleChange} placeholder="GitHub, Live Demo" />
                </div>

               
                <div className="skills">
                    <h2>Skills</h2>

                    <label>Technical Skills:</label>
                    <input type="text" name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} placeholder="JavaScript, React, CSS..." />

                    <label>Soft Skills:</label>
                    <input type="text" name="softSkills" value={formData.softSkills} onChange={handleChange} placeholder="Communication, Leadership..." />
                </div>

                <button type="submit" className="submit-btn">
                    Save Profile
                </button>
            </form>
        </section>
    );
}

export default Form;