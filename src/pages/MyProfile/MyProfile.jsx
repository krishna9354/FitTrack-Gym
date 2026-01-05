import { useState, useEffect } from "react";
import "./MyProfile.css";

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    bmi: "",
    image: "",
  });

  // Load profile from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) setProfile(savedProfile);
  }, []);

  // BMI calculation
  const calculateBMI = (weight, height) => {
    if (!weight || !height) return "";
    const h = height / 100;
    return (weight / (h * h)).toFixed(1);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedProfile = {
      ...profile,
      [name]: value,
    };

    if (name === "weight" || name === "height") {
      updatedProfile.bmi = calculateBMI(
        name === "weight" ? value : profile.weight,
        name === "height" ? value : profile.height
      );
    }

    setProfile(updatedProfile);
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
  };

  // Image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedProfile = { ...profile, image: reader.result };
      setProfile(updatedProfile);
      localStorage.setItem("profile", JSON.stringify(updatedProfile));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      {/* PROFILE CARD */}
      <div className="profile-card">
        {/* IMAGE */}
        <div className="profile-image">
          <img
            src={
              profile.image ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
          />

          <label className="upload-btn">
            Change Photo
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>

        {/* FORM */}
        <div className="profile-form">
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              name="age"
              type="number"
              value={profile.age}
              onChange={handleChange}
              placeholder="Age"
            />
          </div>

          <div className="form-group">
            <label>Height (cm)</label>
            <input
              name="height"
              type="number"
              value={profile.height}
              onChange={handleChange}
              placeholder="Height in cm"
            />
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              name="weight"
              type="number"
              value={profile.weight}
              onChange={handleChange}
              placeholder="Weight in kg"
            />
          </div>

          {/* BMI DISPLAY */}
          <div className="bmi-box">
            <strong>BMI:</strong>{" "}
            {profile.bmi ? profile.bmi : "--"}
          </div>
        </div>
      </div>

      {/* PROFILE SUMMARY */}
      <div className="profile-summary">
        <h3>Profile Summary</h3>
        <p><strong>Name:</strong> {profile.name || "-"}</p>
        <p><strong>Age:</strong> {profile.age || "-"}</p>
        <p><strong>Weight:</strong> {profile.weight ? `${profile.weight} kg` : "-"}</p>
        <p><strong>BMI:</strong> {profile.bmi || "-"}</p>
      </div>
    </div>
  );
};

export default MyProfile;
