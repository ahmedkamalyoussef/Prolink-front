import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import {fetchUserData} from '../../../Api/User'
import './RightSide.css';
function RightSide() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserData();
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="right-side">
    <div className="profile-card">
      <Image
        src="https://bootdey.com/img/Content/avatar/avatar5.png"
        roundedCircle
        width={100}
        height={100}
        className="profile-image"
      />
      <h5 className="mb-0">{user.firstName} {user.lastName}</h5>
      <h6 className="text-muted mb-3">{user.jopTitle}</h6>
      <h6 className="text-muted mb-3">{user.description}</h6>
      <p className="mb-0">Rate: {user.rate}</p>
      <p className="mb-0">Followers: {user.followersCount}</p>
    </div>
  </div>
  )
}

export default RightSide
