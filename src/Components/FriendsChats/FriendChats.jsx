// Components/FriendsChats/FriendChats.jsx
import React from "react";
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from "react-redux";
import { setUserId } from '../../Redux/Slices/UserIdSlice';

function FriendChats({ friend }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setUserId(friend.data.id));
    navigate(`/chat`);
  };

  return (
    <div className="list-group-item list-group-item-action border-0 px-5 my-3">
      <button onClick={handleClick} className="friend-chat-user-card-link">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar5.png"
          className="rounded-circle mr-1"
          alt="Fiona Green"
          width={40}
          height={40}
        />
        <div className="flex-grow-1 ml-3 px-0 px-4">
          {friend.firstName} {friend.lastName}
        </div>
      </button>
      <hr />
    </div>
  );
}

export default FriendChats;
