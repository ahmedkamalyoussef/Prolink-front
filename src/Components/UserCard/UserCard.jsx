import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./UserCard.css";
import rootPath from "../../../../../Visual studio/ProLink.api/ProLink.api/wwwRoot/Images/ahmed0a41468158/Profile/9ea93306-869c-4e25-88b9-253c4a22dd00.jpg";

function UserCard({ user }) {
  return (
    <div className="d-flex justify-content-center my-3">
      <NavLink to={`/profile/${user.id}`} className="user-card-link">
        <div className="user-card d-flex align-items-center">
          <Image
            src={rootPath}
            roundedCircle
            width={70}
            height={70}
            className="me-3"
          />
          <div className="user-card-info">
            <h5 className="mb-1">
              {user.firstName} {user.lastName}
            </h5>
            <p className="text-muted mb-2">{user.jobTitle}</p>
            <p className="text-muted mb-2">{user.description}</p>
            <div className="user-card-stats">
              <span>{user.followersCount} Followers</span>
              <span>{user.rateCount} Ratings</span>
              <span>{user.rate} Stars</span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default UserCard;
