import './Form.css'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { useEffect } from 'react';

export default function Form() {

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));

    const file = form.profileImage.files[0];
    if (file) {
      formData.profileImage = await toBase64(file);
    }

    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    profiles.push(formData);
    localStorage.setItem("profiles", JSON.stringify(profiles));

    // Optional: save experience data separately
    localStorage.setItem(
      "experienceData",
      JSON.stringify({
        jobTitle: formData.jobTitle,
        company: formData.company,
        employmentType: formData.employmentType,
        startDate: formData.startDate,
        endDate: formData.endDate,
        responsibilities: formData.responsibilities,
        technologies: formData.technologies,
      })
    );

    alert("Profile Saved");
  };

  // Helper function to convert file to base64
  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  return (
    <div className="form-container">

      <div className="link">
        <Link to="/" className="back-link">
          <FiArrowLeft /> Back to Dashboard
        </Link>
      </div>

      <section className="form-section">
        <h1>Fill out the following form</h1>
        <form className="form" onSubmit={handleSubmit}>
          {/* Personal Info */}
          <div className="personal">
            <h2>Personal Information</h2>
            <label htmlFor="profileImage">Profile Picture:</label>
            <input type="file" id="profileImage" name="profileImage" accept="image/png, image/jpeg, image/jpg" />

            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" />

            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Prefer not to say</option>
            </select>

            <label htmlFor="bio">Short Bio:</label>
            <textarea id="bio" name="bio" rows="4" placeholder="Write a short professional bio..." />
          </div>
                    <div className="contact">
                    <h2>Contact Information</h2>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" />

                    <label htmlFor="location">Location (City, Country):</label>
                    <input type="text" id="location" name="location" />

                    <label htmlFor="github">GitHub URL:</label>
                    <input type="url" id="github" name="github" />

                    <label htmlFor="linkedin">LinkedIn URL:</label>
                    <input type="url" id="linkedin" name="linkedin" />

                    <label htmlFor="linkedin">Portfolio Link:</label>
                    <input type="url" id="portfolio" name="portfolio" />
                    </div>


                    <div className="summary">
                    <h2>Professional Summary</h2>

                    <label htmlFor="title">Professional Title:</label>
                    <input type="text" id="title" name="title" placeholder="e.g. Frontend Developer" />

                    <label htmlFor="experienceYears">Years of Experience:</label>
                    <input type="number" id="experienceYears" name="experienceYears" min="0" />

                    <label htmlFor="summaryText">Career Summary:</label>
                    <textarea id="summaryText" name="summaryText" rows="4" />
                    </div>


                    <div className="education">
                    <h2>Education</h2>

                    <label htmlFor="institution">Institution Name:</label>
                    <input type="text" id="institution" name="institution" />

                    <label htmlFor="degree">Degree:</label>
                    <input type="text" id="degree" name="degree"  placeholder="e.g: Msc,Phd"/>

                    <label htmlFor="field">Field of Study:</label>
                    <input type="text" id="field" name="field" />

                    <label htmlFor="startYear">Start Year:</label>
                    <input type="date" id="startYear" name="startYear" />

                    <label htmlFor="endYear">End Year:</label>
                    <input type="date" id="endYear" name="endYear" />
                    </div>


                    <div className="experience">
                    <h2>Work Experience</h2>

                    <label htmlFor="jobTitle">Job Title:</label>
                    <input type="text" id="jobTitle" name="jobTitle" />

                    <label htmlFor="company">Company Name:</label>
                    <input type="text" id="company" name="company" />

                    <label htmlFor="employmentType">Employment Type:</label>
                    <select id="employmentType" name="employmentType">
                        <option value="">Select Type</option>
                        <option value="fulltime">Full-Time</option>
                        <option value="parttime">Part-Time</option>
                        <option value="internship">Internship</option>
                        <option value="freelance">Freelance</option>
                    </select>

                    <label htmlFor="startDate">Start Date:</label>
                    <input type="month" id="startDate" name="startDate" />

                    <label htmlFor="endDate">End Date:</label>
                    <input type="month" id="endDate" name="endDate" />

                    <label htmlFor="responsibilities">Responsibilities:</label>
                    <textarea id="responsibilities" name="responsibilities" rows="4" />

                    <label htmlFor="technologies">Technologies Used:</label>
                    <input type="text" id="technologies" name="technologies" placeholder="React, Node.js, MySQL..." />
                    </div>
                    <div className="skills">
                    <h2>Skills</h2>

                    <label htmlFor="technicalSkills">Technical Skills:</label>
                    <input type="text" id="technicalSkills" name="technicalSkills" placeholder="JavaScript, React, CSS..." />

                    <label htmlFor="softSkills">Soft Skills:</label>
                    <input type="text" id="softSkills" name="softSkills" placeholder="Communication, Leadership..." />
                    </div>

          <button type="submit" className="submit-btn">
            Save Profile
          </button>
        </form>
      </section>
    </div>
  )
}
