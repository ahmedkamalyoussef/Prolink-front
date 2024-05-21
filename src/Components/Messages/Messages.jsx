import React, { useState } from "react";
import Conversation from "../Conversation/Conversation";
function Messages() {
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
      <div className="col-12 col-lg-7 col-xl-9">
        <Conversation/>
        <div className="message-input">
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    );
  };
export default Messages
