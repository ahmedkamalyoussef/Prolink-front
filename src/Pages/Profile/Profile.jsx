import React, { useState, useEffect } from "react";
import Post from "../../Components/Post/Post";
import PublishPost from "../../Components/PublishPost/PublishPost";
import { fetchPosts } from "../../Api/Post";
import { fetchUserData } from "../../Api/User";
import "./Profile.css";
import rootPath from "../../../../../Visual studio/ProLink.api/ProLink.api/wwwRoot/Images/ahmed0a41468158/Profile/9ea93306-869c-4e25-88b9-253c4a22dd00.jpg";
import rootPath2 from "../../../../../private/Photos/_vectorr__-20220412-0002.jpg";

import NavbarC from "../../Components/Navbar/Navbar";

function Profile() {
  const [posts, setPosts] = useState([]);
  const [UserData, setUserData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPosts();
        setPosts([]);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const HandlefetchUserData = async () => {
      try {
        const response = await fetchUserData();
        setUserData({});
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    HandlefetchUserData();
    fetchData();
  }, []);

  return (
    <>
      <NavbarC />
      <div className="container py-2 h-100 ">
        <div className="card">
          <div
            className="rounded-top text-white d-flex flex-row pt-5 mb-5 cover"
            style={{
                backgroundImage: `url(${rootPath2}`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
              }}
          >
            <div
              className="ms-4 mt-5 py-5 d-flex flex-column pt-5"
              style={{ width: "150px" }}
            >
              <img
                src={rootPath}
                alt="Profile"
                className="mt-5 mb-2 img-thumbnail"
                style={{ width: "150px", zIndex: "1" }}
              />
              <div className="btn profilebtn ">Edit profile</div>
            </div>
          </div>

          <div className="mx-4 d-flex justify-content-between align-items-center">
            <h5>
              {UserData.firstName} {UserData.lastName}
            </h5>
            <div
              className="mx-4 text-black"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="d-flex justify-content-end text-center py-1">
                <div className="px-lg-3 px-2">
                  <p className="mb-1 h5">{UserData.followersCount}</p>
                  <p className="small text-muted mb-0">Followers</p>
                </div>
                <div className="px-lg-3 px-2">
                  <p className="mb-1 h5">{UserData.rate}</p>
                  <p className="small text-muted mb-0">Rate</p>
                </div>
                <div className="px-lg-3 pl-2">
                  <p className="mb-1 h5">{UserData.rateCount}</p>
                  <p className="small text-muted mb-0">no Rates</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body text-black px-4">
            <div className="mb-1">
              <p className="lead fw-normal mb-1">About</p>
              <div className="px-4" style={{ backgroundColor: "#f8f9fa" }}>
                {UserData.jopTitle && (
                  <p className="font-italic mb-1 jobTitle">
                    {UserData.jopTitle}
                  </p>
                )}
                {UserData.description && (
                    <p className="font-italic mb-0">{UserData.description}</p>
                )}
              </div>
            </div>
          </div>

          <div className="card-body text-dark px-4">
  <div className="mb-5">
    <p className="lead fw-normal mb-1">Skills</p>
    <div className="skills-container px-4">
      {UserData.skills && UserData.skills.map((skill, index) => (
        <div key={index} className="skill-item">{skill.name}</div>
      ))}
    </div>
  </div>
</div>


        </div>
      </div>
      <PublishPost />
      <div className="d-flex justify-content-center">
        <hr className="col-lg-5" />
      </div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
}

export default Profile;
