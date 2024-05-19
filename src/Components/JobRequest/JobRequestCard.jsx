import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./JobRequestCard.css";
import { acceptJobRequest, declinJobRequest } from '../../Api/JobRequest';

const JobRequestCard = ({ id, dateCreated, status, sender }) => {
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

  const handleAcceptJob = async (id) => {
    try {
      const response = await acceptJobRequest(id);
      console.log("Job request accepted:", response);
    } catch (error) {
      console.error("Error accepting job request:", error);
    }
  };

  const handleDeclineJob = async (id) => {
    try {
      const response = await declinJobRequest(id);
      console.log("Job request declined:", response);
    } catch (error) {
      console.error("Error declining job request:", error);
    }
  };

  return (
    <div className={`job-request-card ${status === 1 ? "accepted" : status === 2 ? "denied" : ""}`}>
      <div className="">
        <div className="comment-card">
          <NavLink
            to="/profile"
            className="d-flex text-decoration-none text-black"
          >
            <div className="comment-header">
              <Image
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                roundedCircle
                width={40}
                height={40}
                className="me-3"
              />
              <div>
                <h6 className="mb-0">
                  {sender.firstName} {sender.lastName}
                  <small className="px-3">
                    {calculateTimeDifference(dateCreated)}
                  </small>
                </h6>
                <small className="text-muted">
                  {sender.jopTitle}
                </small>
              </div>
            </div>
          </NavLink>
          <div className="comment-body">
            <small>I want to join your project.</small>
          </div>
        </div>
      </div>
      {status === 0 && (
        <div className="job-request-actions">
          <button className="accept-button" onClick={() => handleAcceptJob(id)}>Accept</button>
          <button className="deny-button" onClick={() => handleDeclineJob(id)}>Deny</button>
        </div>
      )}
      {status === 1 && (
        <p className="status-message">Request Accepted</p>
      )}
      {status === 2 && (
        <p className="status-message">Request Declined</p>
      )}
    </div>
  );
};

export default JobRequestCard;
