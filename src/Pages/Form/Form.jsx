import React from 'react'
import './Form.css'

function Form() {
    return (
        <section className="form-section">
            <form className="form">
                
                <div className="personal">
                    <h2>Personal Information</h2>

                    <label htmlFor="profileImage">Profile Picture:</label>
                    <input type="file" id="profileImage" name="profileImage" accept="image/png, image/jpeg, image/jpg"/>

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

                <button type="submit" className="submit-btn">
                    Save Profile
                </button>
            </form>
        </section>
    )
}

export default Form