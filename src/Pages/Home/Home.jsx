import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Post from '../../Components/Post/Post';
import PublishPost from '../../Components/PublishPost/PublishPost';
import { fetchPosts } from '../../Api/Post';
import LeftSide from '../../Components/Sidebar/Left/LeftSide';
import RightSide from '../../Components/Sidebar/RightSide/RightSide';
import "./Home.css"

const profile = {
  image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
  name: 'Jane Doe',
  rate: '$50/hr',
  followers: 1200,
};

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <LeftSide />
      <Container className="content py-1">
        <PublishPost />
          <hr />
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Container>
      <RightSide profile={profile} />
    </div>
  );
}

export default Home;
