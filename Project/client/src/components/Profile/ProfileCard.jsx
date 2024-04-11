import React from "react";
import "../../styles/Profile/profileCard.css"

function ProfileCard({ userName, userRole }) {

    var userName = "savindu"
    var userRole = "Admin"
  return (
    <div className="profile-card">
      <div className="card-content">
        <h2 className="user-name">{userName}</h2>
        <p className="user-role">{userRole}</p>
      </div>
      <button className="reset-password-btn">Reset Password</button>
    </div>
  );
}

export default ProfileCard;

