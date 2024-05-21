import React, { useState, useEffect } from "react";
import FriendChats from "../../Components/FriendsChats/FriendChats";
import Conversation from "../../Components/Conversation/Conversation";
import { fetchFriendsData } from '../../Api/Friend';
import { fetchUserData } from '../../Api/User';
import { fetchMessages } from '../../Api/Messages';
import { useSelector } from "react-redux";
import './Chat.css'
const Chat = () => {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState({});
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const { userId } = useSelector((state) => state.userId);

  useEffect(() => {
    const handleFetchFriends = async () => {
      try {
        const friendsResult = await fetchFriendsData();
        setFriends(friendsResult);
      } catch (error) {
        console.error("Error fetching friends:", error);
        setError("Failed to fetch friends.");
      }
    };

    const handleFetchFriend = async () => {
      try {
        const userFriend = await fetchUserData();
        setFriend(userFriend);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
      }
    };

    const handleFetchMessages = async () => {
      try {
        const messageResult = await fetchMessages(userId);
        setMessages(messageResult);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setError("Failed to fetch messages.");
      }
    };
    console.log(userId);
    if (userId) {
      handleFetchMessages();
    }
    handleFetchFriends();
    handleFetchFriend();
  }, [userId]);

  return (
    <main className="content mainChat">
      <div className="container p-0">
        <h1 className="h3 mb-3">Chats</h1>
        {error && <p className="error">{error}</p>}
        <div className="card">
          <div className="row g-0">
            <div className="col-12 col-lg-5 col-xl-3 border-right">
              <div className="chats">
                {friends.map((friend) => (
                  <FriendChats key={friend.id} friend={friend} />
                ))}
              </div>
              <hr className="d-block d-lg-none mt-1 mb-0" />
            </div>
            <Conversation messages={messages} friend={friend} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chat;
