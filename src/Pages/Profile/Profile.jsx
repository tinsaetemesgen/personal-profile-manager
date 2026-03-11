/* eslint-disable react-hooks/set-state-in-effect */
import './Profile.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"
import { useEffect, useState } from "react"

export default function Profile(){

const [profiles,setProfiles] = useState([])

useEffect(()=>{

const stored = JSON.parse(localStorage.getItem("profiles")) || []
setProfiles(stored)

},[])

if(profiles.length === 0){
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

{profiles.map(profile => (

<div className="profile-page" key={profile.id}>

<div className="profile-header">

<div className="profile-info">
<h1>{profile.firstName} {profile.lastName}</h1>
<h3>{profile.title}</h3>
</div>

</div>

<p className="bio">{profile.bio}</p>

<div className="profile-section">

<h2>Contact Information</h2>

<p>Email: {profile.email}</p>
<p>Phone: {profile.phone}</p>
<p>Location: {profile.location}</p>
<p>Github: {profile.github}</p>
<p>LinkedIn: {profile.linkedin}</p>

</div>

<div className="profile-section">

<h2>Skills</h2>

<p><strong>Technical:</strong> {profile.technicalSkills}</p>
<p><strong>Soft:</strong> {profile.softSkills}</p>

</div>

<Link to={`/form?id=${profile.id}`} className="edit-btn">
Edit Profile
</Link>

</div>

))}

</div>
)
}