import React from 'react';
import FriendChats from "../FriendsChats/FriendChats";
function FriendsInChat() {
  return (
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
  )
}

export default FriendsInChat
