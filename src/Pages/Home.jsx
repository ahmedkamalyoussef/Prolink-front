import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Post from '../Components/Post/Post';
import PublishPost from '../Components/PublishPost/PublishPost';

function Home() {
  const [posts, setPosts] = useState([]);

  const handlePublishPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Container className="py-5">
      <PublishPost onPublish={handlePublishPost} />
      <div className="d-flex justify-content-center">
        <hr className="col-lg-5" />
      </div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Container>
  );
}

export default Home;
