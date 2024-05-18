import React from 'react'

function FriendChats() {
  return (
    <>
      <a href="#" className="list-group-item list-group-item-action border-0 px-3">
            <div className="d-flex align-items-start">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Fiona Green" width={40} height={40} />
              <div className="flex-grow-1 ml-3 px-3 pt-2">
                Fiona Green
                {/* <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div> */}
              </div>
            </div>
            <hr></hr>
          </a>
    </>
  )
}

export default FriendChats
