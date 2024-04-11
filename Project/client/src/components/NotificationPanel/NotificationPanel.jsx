import React from "react";
import "../../styles/NotificationPanel/notificationPanel.css"

function NotificationPanel({ notifications }) {
    return (
      <div className="notification-panel">
        <h2 className="notification-heading">Notifications</h2>
        <div className="notifications">
          {notifications.map((notification, index) => (
            <div className="notification" key={index}>
              <p className="message">{notification.message}</p>
              <p className="sender">{notification.sender}</p>
              <p className="date">{notification.date}</p>
              <button className="mark-as-read-btn">Mark as read</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default NotificationPanel;
