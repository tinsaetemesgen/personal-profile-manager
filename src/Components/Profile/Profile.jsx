import "./profile.css";
import { CgProfile } from "react-icons/cg";

function Profile({ userData }) {
  return (
    <div className="container">
      {userData.image ? (
        <img src={userData.image} alt="profile" className="profile-image" />
      ) : (
        <CgProfile className="profile-icon" />
      )}

      <hr color="black" />

      <p>{userData.username || "No username yet"}</p>
    </div>
  );
}

export default Profile;
