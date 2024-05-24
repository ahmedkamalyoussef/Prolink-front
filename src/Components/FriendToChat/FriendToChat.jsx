import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./FriendToChat.css";
import rootPath from "../../../../../Visual studio/ProLink.api/ProLink.api/wwwRoot/Images/ahmed0a41468158/Profile/9ea93306-869c-4e25-88b9-253c4a22dd00.jpg";

const  FriendToChat=({ friend }) =>{
  console.log(friend.profilePicture);
  return (
    <div className="list-group-item list-group-item-action border-0  my-3">
      <NavLink to={`/chat`} className="friend-chat-user-card-link">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar5.png"
          className="rounded-circle mr-1"
          alt="Fiona Green"
          width={35}
          height={35}
        />

        <div className="flex-grow-1 ml-0 px-0 px-2" style={{fontFamily:"Cairo"}}>
          {friend.firstName} {friend.lastName}

          {/* <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div> */}
        </div>
      </NavLink>
    </div>
  );
}

export default FriendToChat;
