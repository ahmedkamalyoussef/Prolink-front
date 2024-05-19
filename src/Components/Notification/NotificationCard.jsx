import React from 'react';
import './NotificationCard.css';

const NotificationCard = ({ timestamp, content }) => {
  const calculateTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const difference = Math.abs(currentTime - createdTime);
    const minutes = Math.floor(difference / 60000);
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours}h`;
    }
    const days = Math.floor(hours / 24);
    if (days < 2) {
      return `${days}d`;
    }
    return createdTime.toLocaleDateString();
  };
  return (
    <div className="notification-card">
      <div className="notification-header">
        <span className="profile-name">{content}</span>
      </div>
      <div className="notification-content">
        {calculateTimeDifference(timestamp)}
      </div>
    </div>
  );
};

export default NotificationCard;
