import './Profile.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"
import { useEffect, useState } from "react"

export default function Profile(){

const [profile,setProfile] = useState(null)
const [experience,setExperience] = useState(null)

useEffect(()=>{

const profiles = JSON.parse(localStorage.getItem("profiles")) || []
const expData = JSON.parse(localStorage.getItem("experienceData"))

if(profiles.length > 0){
// eslint-disable-next-line react-hooks/set-state-in-effect
setProfile(profiles[profiles.length-1])
}

if(expData){
setExperience(expData)
}

},[])

if(!profile){
return(
<div className="profile-container">
<h2>No Profile Created Yet</h2>
</div>
)
}

return(

<div className="profile-container">

<div className="link">
<Link to="/" className="back-link">
<FiArrowLeft/> Back to Dashboard
</Link>
</div>

<div className="profile-page">

{/* Profile Header */}
<div className="profile-header">

{profile.profileImage && (
<img
src={profile.profileImage}
alt="Profile"
className="profile-image"
/>
)}

<div className="profile-info">
<h1>{profile.firstName} {profile.lastName}</h1>
<h3>{profile.title}</h3>
</div>

</div>

<p className="bio">{profile.bio}</p>

{/* Contact */}
<div className="profile-section">

<h2>Contact Information</h2>

<p>Email: {profile.email}</p>
<p>Phone: {profile.phone}</p>
<p>Location: {profile.location}</p>
<p>Github: {profile.github}</p>
<p>LinkedIn: {profile.linkedin}</p>

</div>

{/* Skills */}
<div className="profile-section">

<h2>Skills</h2>

<p><strong>Technical:</strong> {profile.technicalSkills}</p>
<p><strong>Soft:</strong> {profile.softSkills}</p>

</div>

{/* Experience */}
{experience && (
<div className="profile-section">

<h2>Work Experience</h2>

<p><strong>Job Title:</strong> {experience.jobTitle}</p>
<p><strong>Company:</strong> {experience.company}</p>
<p><strong>Employment Type:</strong> {experience.employmentType}</p>
<p><strong>Start Date:</strong> {experience.startDate}</p>
<p><strong>End Date:</strong> {experience.endDate}</p>

<p><strong>Responsibilities:</strong></p>
<p>{experience.responsibilities}</p>

<p><strong>Technologies Used:</strong> {experience.technologies}</p>

</div>
)}

</div>

</div>
)
}