import './Form.css'
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { FiHome, FiUser, FiTool, FiFolder, FiSettings, FiLogOut, FiArrowLeftCircle, FiArrowDownLeft, FiArrowLeft } from "react-icons/fi";


export default function Form() {
    return (
        <>

        <div className="links">
            <FiArrowLeft/>
            <Link to="/" className="back-link">Back to Dashboard</Link>
        </div>
            <h1>Form Page</h1>
        </>
    )
}