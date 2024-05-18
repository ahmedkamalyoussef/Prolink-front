import React from 'react';
import './NotificationCard.css';

const NotificationCard = ({ profilePic, name, content }) => {
  return (
    <div className="notification-card">
      <div className="notification-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="profile-name">{name}</span>
      </div>
      <div className="notification-content">
        {content}
      </div>
    </div>
  );
};

export default NotificationCard;
