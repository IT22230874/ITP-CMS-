import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "../../styles/TopBar/topBar.css"

function TopBar({ role }) {
  return (
    <div className="top-bar">
      <div className="logo">
        <span className="blue-text">Shan</span>Constructions
      </div>
      <div className="right-section">
        <div className="notifications-icon">
          <FaBell style={{ fontSize: 24, marginRight: 16 }} />
        </div>
        <div className="profile-info">
          <FaUserCircle style={{ fontSize: 24, marginRight: 8 }} />
          <span className="role">{role}</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

