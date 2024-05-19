import React, { useState } from "react";
import FriendChats from "../../Components/FriendsChats/FriendChats";
import Conversation from "../../Components/Conversation/Conversation";
import './Chat.css'
const Chat = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      console.log("Message sent:", message);
      setMessage(""); // Clear the message input after sending
    }
  };

  return (
    <main className="content mainChat">
  <div className="container p-0">
    <h1 className="h3 mb-3">Chats</h1>
    <div className="card">
      <div className="row g-0">
        <div className="col-12 col-lg-5 col-xl-3 border-right">
          <div className="px-4 d-none d-md-block">
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <input type="text" className="form-control my-3" placeholder="Search..." />
              </div>
            </div>
          </div>
           
          <div className="chats">
          <FriendChats/>
          <FriendChats/>
          <FriendChats/>
          <FriendChats/>
          <FriendChats/>
          <FriendChats/>
          <FriendChats/>
          <FriendChats/>
          <FriendChats/>
          <FriendChats/>
          </div>
          
          <hr className="d-block d-lg-none mt-1 mb-0" />
        </div>
        
<Conversation/>

      </div>
    </div>
  </div>
</main>

  );
};

export default Chat;
