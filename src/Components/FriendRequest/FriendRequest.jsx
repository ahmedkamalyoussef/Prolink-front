import React, { useState, useEffect } from "react";
import { fetchUserByIdData } from "../../Api/User";
import { acceptFriendRequest, declinFriendRequest } from '../../Api/Friend';
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import './FriendRequest.css';
const FriendRequest = ({ request }) => {
  const [sender, setSender] = useState({});

  useEffect(() => {
    const handleFetchUserData = async () => {
      try {
        if (!request || !request.senderId) {
          throw new Error('senderId is undefined');
        }
        const response = await fetchUserByIdData(request.senderId);
        setSender(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    handleFetchUserData();
  }, [request]);

  const HandleAcceptFriendRequest = async (id) => {
    try {
      const response = await acceptFriendRequest(id);
      console.log("friend request accepted:", response);
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const HandleDeclinFriendRequest = async (id) => {
    try {
      const response = await declinFriendRequest(id);
      console.log("friend request declined:", response);
    } catch (error) {
      console.error("Error declining friend request:", error);
    }
  };

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
    <div className={`job-request-card ${request.status === 1 ? "accepted" : request.status === 2 ? "denied" : ""}`}>
      <div className="">
        <div className="comment-card">
          <NavLink
            to={`/profile/${sender.id}`}
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
                    {calculateTimeDifference(request.dateSent)}
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
      {request.status === 0 && (
        <div className="job-request-actions">
          <button className="accept-button" onClick={() => HandleAcceptFriendRequest(request.id)} >Accept</button>
          <button className="deny-button"  onClick={() => HandleDeclinFriendRequest(request.id)} >Deny</button>
        </div>
      )}
      {request.status === 1 && (
        <p className="status-message">Request Accepted</p>
      )}
      {request.status === 2 && (
        <p className="status-message">Request Declined</p>
      )}
    </div>
  );
};

export default FriendRequest;
