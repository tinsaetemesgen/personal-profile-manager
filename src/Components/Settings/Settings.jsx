import "./Settings.css";
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings({ setUserData }) {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handlePlusClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    setUserData({
      username,
      image,
    });

    alert("Your Profile is Updated Successfully");
    navigate("/profile");
  };

  return (
    <div>
      <div className="container">
        {image ? (
          <img src={image} alt="profile" className="profile-image" />
        ) : (
          <CgProfile className="profile-icon" />
        )}

        <CiCirclePlus className="plus-icon" onClick={handlePlusClick} />

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept="image/*"
        />
      </div>

      <form onSubmit={handleUpdate}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Settings;
