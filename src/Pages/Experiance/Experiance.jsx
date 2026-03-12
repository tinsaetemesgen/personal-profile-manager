import './Experiance.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"
import { useEffect,useState } from "react"

export default function Experience(){

const [exp,setExp] = useState(null)

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("experienceData"))

// eslint-disable-next-line react-hooks/set-state-in-effect
setExp(data)

},[])

if(!exp){
return(
<div className="experience-container">
<h2>No Experience Added</h2>
</div>
)
}

return(

<div className="experience-container">

<div className="link">
<Link to="/" className="back-link">
<FiArrowLeft/> Back to Dashboard
</Link>
</div>

<div className="experience-page">

<h1>Work Experience</h1>

<div className="experience-card">

<h2>{exp.jobTitle}</h2>

<p><strong>Company:</strong> {exp.company}</p>

<p><strong>Type:</strong> {exp.employmentType}</p>

<p><strong>Duration:</strong> {exp.startDate} - {exp.endDate}</p>

<h3>Responsibilities</h3>

<p>{exp.responsibilities}</p>

<h3>Technologies</h3>

<p>{exp.technologies}</p>

</div>

</div>

</div>
)
}