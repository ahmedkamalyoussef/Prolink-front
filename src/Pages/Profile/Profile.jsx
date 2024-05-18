import React, { useState, useEffect } from 'react';
import Post from '../../Components/Post/Post';
import PublishPost from '../../Components/PublishPost/PublishPost';
import './Profile.css';

function Profile() {
    const [posts, setPosts] = useState([]);
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: null,
        cv: null,
        description: null,
        rateCount: 0,
        rate: 0,
        profilePicture: null,
        backImage: null,
        skills: []
    });

    useEffect(() => {
        // Fetch profile data from endpoint
        fetchProfileData();
    }, []);

    const fetchProfileData = () => {
        // Assuming you have an endpoint URL
        const endpoint = 'your_endpoint_url';

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                // Update profileData state with fetched data
                setProfileData(data);
            })
            .catch(error => console.error('Error fetching profile data:', error));
    };

    const handlePublishPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <>
            <div className="container py-5 h-100">
                {/* Profile Header Section */}
                <div className="card">
                    <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '300px' }}>
                        <div className="ms-4 mt-5 py-6 d-flex flex-column" style={{ width: '150px' }}>
                            <img src={profileData.profilePicture || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'} alt="Profile" className="mt-4 mb-2 img-thumbnail" style={{ width: '150px', zIndex: '1' }} />
                            <button className="btn btn-outline-dark" style={{ height: '36px', overflow: 'visible', zIndex: "2", color: "#fff" }}>
                                Edit profile
                            </button>
                        </div>
                        <div className="ms-3" style={{ marginTop: '130px' }}>
                            <h5>{profileData.firstName} {profileData.lastName}</h5>
                            {/* Display additional profile information (e.g., job title, location) */}
                            {profileData.jobTitle && <p>{profileData.jobTitle}</p>}
                            {profileData.location && <p>{profileData.location}</p>}
                        </div>
                    </div>
                    {/* Profile Stats Section */}
                    <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="d-flex justify-content-end text-center py-1">
                            <div>
                                <p className="mb-1 h5">{profileData.photosCount}</p>
                                <p className="small text-muted mb-0">Photos</p>
                            </div>
                            <div className="px-3">
                                <p className="mb-1 h5">{profileData.followersCount}</p>
                                <p className="small text-muted mb-0">Followers</p>
                            </div>
                            <div>
                                <p className="mb-1 h5">{profileData.followingCount}</p>
                                <p className="small text-muted mb-0">Following</p>
                            </div>
                        </div>
                    </div>
                    {/* Profile About Section */}
                    <div className="card-body text-black p-4">
                        <div className="mb-5">
                            <p className="lead fw-normal mb-1">About</p>
                            <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                {profileData.jobTitle && <p className="font-italic mb-1">{profileData.jobTitle}</p>}
                                {profileData.location && <p className="font-italic mb-1">{profileData.location}</p>}
                                {/* Display additional profile description or skills */}
                                {profileData.description && <p className="font-italic mb-0">{profileData.description}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Publish Post Component */}
            <PublishPost onPublish={handlePublishPost} />
            <div className="d-flex justify-content-center">
                <hr className="col-lg-5" />
            </div>
            {/* Display Posts */}
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </>
    );
}

export default Profile;
