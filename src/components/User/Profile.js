// frontend/src/components/User/Profile.js
import React, { useState } from "react";
import "./Profile.css"; // Import the corresponding CSS file

const Profile = () => {
  // Initial user data
  const initialUserData = {
    name: "Aarav Patel",
    email: "aarav.patel@email.com",
    avatar: "https://via.placeholder.com/150", // Placeholder avatar
  };

  const [userData, setUserData] = useState(initialUserData);
  const [newAvatar, setNewAvatar] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add the logic to save the updated profile data.
    if (newAvatar) {
      setUserData((prev) => ({
        ...prev,
        avatar: newAvatar,
      }));
    }
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="profile-header">
        <img
          src={userData.avatar}
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <h2>{userData.name}</h2>
        <p>{userData.email}</p>
      </div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload Avatar:
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
