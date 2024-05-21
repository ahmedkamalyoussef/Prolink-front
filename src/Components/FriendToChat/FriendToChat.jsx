import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./FriendToChat.css";
import rootPath from "../../../../../Visual studio/ProLink.api/ProLink.api/wwwRoot/Images/ahmed0a41468158/Profile/9ea93306-869c-4e25-88b9-253c4a22dd00.jpg";

function FriendToChat({ friend }) {
  return (
    <div className="list-group-item list-group-item-action border-0 px-5 my-3">
      <NavLink to={`/chat`} className="friend-chat-user-card-link">
      <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Fiona Green" width={40} height={40} />

      <div className="flex-grow-1 ml-3 px-0 px-2">
                {friend.firstName} {friend.lastName}
                {/* <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div> */}
              </div>
          
        
      </NavLink>
              <hr></hr>


      
    </div>
  );
}

export default FriendToChat;
