import React, { useState } from 'react';
import Post from '../../Components/Post/Post';
import PublishPost from '../../Components/PublishPost/PublishPost';
import './Profile.css'
function Profile() {
    const [posts, setPosts] = useState([]);

  const handlePublishPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };
  return (
    <>
          <div className="container py-5 h-100">
            <div className="card">
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '300px' }}>
                <div className="ms-4 mt-5 py-6 d-flex flex-column" style={{ width: '150px' }}>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" style={{ width: '150px', zIndex: '1' }} />
                  <button className="btn btn-outline-dark" style={{ height: '36px', overflow: 'visible',zIndex:"2",color:"#fff" }}>
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">253</p>
                    <p className="small text-muted mb-0">Photos</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">1026</p>
                    <p className="small text-muted mb-0">Followers</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">478</p>
                    <p className="small text-muted mb-0">Following</p>
                  </div>
                </div>
              </div>
              <div className="card-body text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <p className="font-italic mb-1">Web Developer</p>
                    <p className="font-italic mb-1">Lives in New York</p>
                    <p className="font-italic mb-0">Photographer</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
                <PublishPost onPublish={handlePublishPost} />
                <div className="d-flex justify-content-center">
                    <hr className="col-lg-5" />
                </div>
                {posts.map((post, index) => (
                <Post key={index} post={post} />
                 ))}
        </>
  )
}

export default Profile
