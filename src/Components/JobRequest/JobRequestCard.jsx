import React from 'react';
import './JobRequestCard.css';

const JobRequestCard = ({ profilePic, name, content, onAccept, onDeny }) => {
  return (
    <div className="job-request-card">
      <div className="job-request-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="profile-name">{name}</span>
      </div>
      <div className="job-request-content">
        {content}
      </div>
      <div className="job-request-actions">
        <button className="accept-button" onClick={onAccept}>Accept</button>
        <button className="deny-button" onClick={onDeny}>Deny</button>
      </div>
    </div>
  );
};

export default JobRequestCard;
