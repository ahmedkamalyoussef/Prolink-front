import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col, Modal, Card } from 'react-bootstrap';
import { FaImage } from 'react-icons/fa';
import { addPost } from '../../Api/Post';
import './PublishPost.css';

function PublishPost() {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleNewPostTitleChange = (event) => {
    setNewPostTitle(event.target.value);
  };

  const handleNewPostChange = (event) => {
    setNewPostText(event.target.value);
  };

  const handleNewPostImageChange = (event) => {
    setNewPostImage(event.target.files[0]);
  };

  const handleNewPostSubmit = async (event) => {
    event.preventDefault();
    try {
      const postData = {
        title: newPostTitle,
        text: newPostText,
        image: newPostImage,
      };
      const response = await addPost(postData);
      // onPublish(response);
      resetForm();
      setShowModal(false);
    } catch (error) {
      alert(`Failed to post: ${error.response?.data?.message || error.message}`);
    }
  };

  const resetForm = () => {
    setNewPostTitle('');
    setNewPostText('');
    setNewPostImage(null);
  };

  return (
    <>
      <Row className="justify-content-center mt-4">
        <Col lg={6} md={8} sm={10}>
          <Card className="publish-post-card" onClick={() => setShowModal(true)}>
            <Card.Body className="d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
              <span>What's on your mind?</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleNewPostSubmit}>
            <Form.Group controlId="newPostTitle">
              <FormControl
                type="text"
                placeholder="Enter post title"
                value={newPostTitle}
                onChange={handleNewPostTitleChange}
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="newPostText">
              <FormControl
                as="textarea"
                rows={3}
                placeholder="What's on your mind?"
                value={newPostText}
                onChange={handleNewPostChange}
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="newPostImage">
              <Form.Label>
                <FaImage size={20} className="me-2" />
                Add Photo
              </Form.Label>
              <FormControl
                type="file"
                accept="image/*"
                onChange={handleNewPostImageChange}
                className="mb-3"
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={() => setShowModal(false)} className="me-2">
                Cancel
              </Button>
              <Button variant="primary" type="submit">Post</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PublishPost;
