import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FaImage } from 'react-icons/fa';

function PublishPost({ onPublish }) {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);

  const handleNewPostTitleChange = (event) => {
    setNewPostTitle(event.target.value);
  };

  const handleNewPostChange = (event) => {
    setNewPostText(event.target.value);
  };

  const handleNewPostImageChange = (event) => {
    setNewPostImage(event.target.files[0]);
  };

  const handleNewPostSubmit = (event) => {
    event.preventDefault();
    if (newPostText.trim() || newPostImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onPublish({
          title: newPostTitle,
          text: newPostText,
          image: reader.result
        });
        resetForm();
      };
      if (newPostImage) {
        reader.readAsDataURL(newPostImage);
      } else {
        onPublish({
          title: newPostTitle,
          text: newPostText,
          image: null
        });
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setNewPostTitle('');
    setNewPostText('');
    setNewPostImage(null);
  };

  return (
    <Row className="justify-content-center mt-2">
      <Col lg={5}>
        <div className="">
          <Form onSubmit={handleNewPostSubmit}>
            <Form.Group controlId="newPostTitle">
              <FormControl
                type="text"
                placeholder="Enter post title"
                value={newPostTitle}
                onChange={handleNewPostTitleChange}
                className="mb-1"
              />
            </Form.Group>
            <Form.Group controlId="newPostText">
              <FormControl
                as="textarea"
                rows={4}
                placeholder="Start a post..."
                value={newPostText}
                onChange={handleNewPostChange}
                className="mb-3"
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-center">
              <label htmlFor="newPostImage" className="me-3" style={{ cursor: 'pointer' }}>
                <FaImage />
                <FormControl
                  type="file"
                  id="newPostImage"
                  accept="image/*"
                  onChange={handleNewPostImageChange}
                  style={{ display: 'none' }}
                />
              </label>
              <Button variant="primary" type="submit">Post</Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default PublishPost;
