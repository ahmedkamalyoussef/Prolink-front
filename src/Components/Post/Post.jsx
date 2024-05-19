import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Image,
  Container,
  Form,
  InputGroup,
  FormControl,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import {
  FaRegThumbsUp,
  FaImage,
  FaEllipsisV,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import rootPath from "../../../../../Visual studio/ProLink.api/ProLink.api/wwwRoot/Images/ahmed0a41468158/Profile/9ea93306-869c-4e25-88b9-253c4a22dd00.jpg";
import {
  addComment,
  addLike,
  deleteLike,
  deletePost,
  editPost,
} from "../../Api/Post";
import { fetchUserData } from "../../Api/User";
import { sendJobRequest } from "../../Api/JobRequest";
import "./Post.css";

function Post({ post }) {
  const [userData, setUserData] = useState({});
  const [newComment, setNewComment] = useState("");
  const [commentImage, setCommentImage] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [showOptions, setShowOptions] = useState(false);
  const [commentInputVisible, setCommentInputVisible] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState(post.title);
  const [newPostText, setNewPostText] = useState(post.description);
  const [newPostImage, setNewPostImage] = useState(post.postImage);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetchUserData();
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  const handleNewPostTitleChange = (event) => {
    setNewPostTitle(event.target.value);
  };

  const handleNewPostChange = (event) => {
    setNewPostText(event.target.value);
  };

  const handleNewPostImageChange = (event) => {
    setNewPostImage(event.target.files[0]);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleImageChange = (event) => {
    setCommentImage(event.target.files[0]);
  };

  const handleSendJobRequset = async (event) => {
    event.preventDefault();
    try {
      await sendJobRequest(userData.id, post.id);
    } catch (error) {
      alert("Error sending job request");
    }
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      await addComment(post.id, newComment);
      setNewComment("");
    } catch (error) {
      alert("Error adding comment");
    }
  };

  const handleLike = async () => {
    try {
      if (isLiked) {
        await deleteLike(post.likeId);
      } else {
        await addLike(post.id);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      alert(`Error ${isLiked ? "deleting" : "adding"} like: ${error}`);
    }
  };

  const handleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  const handleDeletePost = async () => {
    try {
      await deletePost(post.id);
    } catch (error) {
      alert(`Error deleting post ${post.title}`);
    }
  };

  const handleEditPostSubmit = async (event) => {
    event.preventDefault();
    try {
      // const postData = {
      //   title: newPostTitle,
      //   description: newPostText,
      //   postImage: newPostImage,
      // };
      await editPost(post.id, newPostTitle,newPostText,newPostImage);
      setShowModal(false);
    } catch (error) {
      alert(`Failed to edit post: ${error}`);
    }
  };

  const calculateTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const difference = Math.abs(currentTime - createdTime);
    const minutes = Math.floor(difference / 60000);
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours}h`;
    }
    const days = Math.floor(hours / 24);
    if (days < 2) {
      return `${days}d`;
    }
    return createdTime.toLocaleDateString();
  };

  const displayedComments = showAllComments
    ? post.comments
    : post.commentsCount > 0
    ? post.comments.slice(0, 1)
    : [];

  return (
    <Container className="py-2">
      <Row className="justify-content-center">
        <Col lg="5">
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex justify-content-left mb-3">
                  <NavLink
                    to="/profile"
                    className="d-flex text-decoration-none text-black"
                  >
                    <Image
                      src={rootPath}
                      roundedCircle
                      width={40}
                      height={40}
                      className="me-3"
                    />
                    <div>
                      <h6 className="mb-0">
                        {post.user.firstName} {post.user.lastName}
                        <small className="px-3">
                          {calculateTimeDifference(post.dateCreated)}
                        </small>
                      </h6>
                      <small className="text-muted">
                        {post.user.jopTitle} • {post.user.rate}
                      </small>
                    </div>
                  </NavLink>
                </div>
                {post.user.id === userData.id && (
                  <div>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Options</Tooltip>}
                    >
                      <Button
                        className="postBtn"
                        variant="link"
                        onClick={() => setShowOptions(!showOptions)}
                      >
                        <FaEllipsisV />
                      </Button>
                    </OverlayTrigger>
                    {showOptions && (
                      <div className="options">
                        <Button variant="link" className="postBtn">
                          <FaEdit onClick={() => setShowModal(true)} />
                        </Button>
                        <Button
                          variant="link"
                          className="postBtn"
                          onClick={handleDeletePost}
                        >
                          <FaTrash />
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div style={{ width: "100%", maxWidth: "500px" }}>
                  <h5 style={{ color: "#3c97bf" }}>{post.title}</h5>
                  <p>{post.description}</p>
                  <Image
                    src={rootPath}
                    fluid
                    className="rounded"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Button
                  variant="primary"
                  className="postBtn"
                  onClick={handleSendJobRequset}
                >
                  Apply for Job
                </Button>
                <div className="d-flex align-items-center">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        {likes.length > 0
                          ? likes.map((like, index) => (
                              <div key={index}>
                                {`${like.user.firstName} ${like.user.lastName}`}
                              </div>
                            ))
                          : "No likes yet"}
                      </Tooltip>
                    }
                  >
                    <Button
                      variant={isLiked ? "primary" : "outline-secondary"}
                      className="me-2 postBtn "
                      onClick={handleLike}
                    >
                      <FaRegThumbsUp className="me-0" />
                      <span>{`${post.likesCount}`}</span>
                      {/* {isLiked ? "Liked" : "Like"} */}
                    </Button>
                  </OverlayTrigger>
                  <Button
                    className="postBtn"
                    variant="primary"
                    onClick={() => setCommentInputVisible(!commentInputVisible)}
                    style={{ cursor: "pointer" }}
                  >
                    Comment
                  </Button>
                </div>
              </div>
              <hr />
              {commentInputVisible && (
                <Form onSubmit={handleCommentSubmit}>
                  <h6>Comments</h6>
                  <InputGroup className="mb-3">
                    <FormControl
                      type="text"
                      value={newComment}
                      onChange={handleCommentChange}
                      placeholder="Add a comment..."
                    />
                    <InputGroup.Text as="label" htmlFor="commentImage">
                      <FaImage style={{ cursor: "pointer" }} />
                      <FormControl
                        type="file"
                        id="commentImage"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                    </InputGroup.Text>
                  </InputGroup>
                  <Button className="postBtn" variant="primary" type="submit">
                    Post Comment
                  </Button>
                </Form>
              )}
              <div className="mt-4">
                {displayedComments.map((comment, index) => (
                  <div key={index} className="d-flex mb-3">
                    <div className="comment-card">
                      <NavLink
                        to="/profile"
                        className="d-flex text-decoration-none text-black"
                      >
                        <div className="comment-header">
                          <Image
                            src={rootPath}
                            roundedCircle
                            width={40}
                            height={40}
                            className="me-3"
                          />
                          <div>
                            <h6 className="mb-0">
                              {comment.user.firstName} {comment.user.lastName}
                              <small className="px-3">
                                {calculateTimeDifference(comment.timestamp)}
                              </small>
                            </h6>
                            <small className="text-muted">
                              {comment.user.jopTitle}
                            </small>
                          </div>
                        </div>
                      </NavLink>
                      <div className="comment-body">
                        <div>{comment.content}</div>
                        {comment.image && (
                          <div className="mt-2">
                            <Image
                              src={comment.image}
                              fluid
                              className="rounded"
                              style={{ width: "100%", maxWidth: "200px" }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {post.commentsCount > 1 && (
                  <Button
                    variant="link"
                    onClick={handleShowAllComments}
                    className="postBtn p-0"
                  >
                    {showAllComments
                      ? "Show less comments"
                      : "Show all comments"}
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleEditPostSubmit}>
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
                  <Button
                    variant="secondary"
                    onClick={() => setShowModal(false)}
                    className="me-2"
                  >
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
