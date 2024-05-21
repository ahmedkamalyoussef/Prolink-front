import React, { useState, useEffect } from "react";
import { fetchFriendsData } from '../../../Api/Friend';
import './LeftSide.css';
import FriendToChat from "../../FriendToChat/FriendToChat";
import { FaUserFriends } from "react-icons/fa";

const LeftSide = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const handleFetchFriendRequests = async () => {
      try {
        const friendsResult = await fetchFriendsData();
        setFriends(friendsResult);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };
    handleFetchFriendRequests();
  }, []);

  return (
    <div className="left-side text-center">
      <h4 className="">
        <FaUserFriends /> Friends
      </h4>
      {friends.map((friend) => (
        <FriendToChat key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default LeftSide;
