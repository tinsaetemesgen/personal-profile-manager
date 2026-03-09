import './Profile.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"
import { useEffect,useState } from "react"

export default function Profile(){

const [profile,setProfile] = useState(null)

useEffect(()=>{

const profiles = JSON.parse(localStorage.getItem("profiles")) || []

if(profiles.length > 0){
// eslint-disable-next-line react-hooks/set-state-in-effect
setProfile(profiles[profiles.length-1])
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

<h1>{profile.firstName} {profile.lastName}</h1>

<h3>{profile.title}</h3>

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

<p>{profile.technicalSkills}</p>
<p>{profile.softSkills}</p>

</div>

</div>

</div>
)
}