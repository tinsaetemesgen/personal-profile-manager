/* eslint-disable react-hooks/set-state-in-effect */
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { FiPlus, FiUser, FiSettings } from "react-icons/fi"
import { useEffect, useState } from "react"

export default function Dashboard() {

const [count,setCount] = useState(0)

useEffect(() => {

const profiles = JSON.parse(localStorage.getItem("profiles")) || []
setCount(profiles.length)

const toggle = document.getElementById("theme")

const handleTheme = () => {
document.body.classList.toggle("dark", toggle.checked)
localStorage.setItem("theme", toggle.checked ? "dark" : "light")
}

const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){
document.body.classList.add("dark")
if(toggle) toggle.checked = true
}

if(toggle) toggle.addEventListener("change", handleTheme)

return () => {
if(toggle) toggle.removeEventListener("change", handleTheme)
}

},[])

return (
<div className="dashboard-page">

<div className="dashboard-header">
<h1>Dashboard</h1>
</div>

<div className="dashboard-cards">

<div className="dashboard-card">
<Link to="/profile" className="card-link">
<FiUser className="card-icon" />
<h3>Total Profiles</h3>
<p><span id="counter">{count}</span> Profiles Created</p>
</Link>
</div>

<div className="dashboard-card">
<Link to="/settings" className="card-link">
<FiSettings className="card-icon" />
<h3>Settings</h3>
<p>Manage Preferences</p>
</Link>
</div>

<div className="dashboard-card">
<Link to="/form" className="add-profile-btn card-link">
<FiPlus className="card-icon" />
<h3>Create Profile</h3>
<p>Add a new profile to your portfolio</p>
</Link>
</div>

</div>

</div>
)
}