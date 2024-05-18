import React from 'react';
import './FriendRequest.css';

const FriendRequest = ({ profilePic, name, content, onAccept, onDeny }) => {
  return (
    <div className="friend-request-card">
      <div className="friend-request-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="profile-name">{name}</span>
      </div>
      <div className="friend-request-content">
        {content}
      </div>
      <div className="friend-request-actions">
        <button className="accept-button" onClick={onAccept}>Accept</button>
        <button className="deny-button" onClick={onDeny}>Deny</button>
      </div>
    </div>
  );
};

export default FriendRequest;
