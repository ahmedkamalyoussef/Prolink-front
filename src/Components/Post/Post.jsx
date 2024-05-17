import React, { useState } from "react";
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
} from "react-bootstrap";
import {
  FaRegThumbsUp,
  FaImage,
  FaEllipsisV,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import "./Post.css";

function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentImage, setCommentImage] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [commentInputVisible, setCommentInputVisible] = useState(false); // New state for controlling comment input visibility

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleImageChange = (event) => {
    setCommentImage(event.target.files[0]);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setComments([
          ...comments,
          { name: "Anonymous", text: newComment, image: reader.result },
        ]);
        setNewComment("");
        setCommentImage(null);
      };
      if (commentImage) {
        reader.readAsDataURL(commentImage);
      } else {
        setComments([
          ...comments,
          { name: "Anonymous", text: newComment, image: null },
        ]);
        setNewComment("");
      }
    }
  };

  const handleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes.filter((user) => user !== "You"));
    } else {
      setLikes([...likes, "You"]);
    }
    setIsLiked(!isLiked);
  };

  const displayedComments = showAllComments ? comments : comments.slice(0, 1);

  const fixedImageWidth = { width: "100%", maxWidth: "500px" };

  return (
    <Container className="py-2">
      <Row className="justify-content-center">
        <Col lg="5">
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex justify-content-left mb-3">
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    roundedCircle
                    width={40}
                    height={40}
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-0">Andy Horwitz</h6>
                    <small className="text-muted">
                      Web Developer at Tech Company • 1st
                    </small>
                  </div>
                </div>
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
                        <FaEdit />
                      </Button>
                      <Button variant="link" className="postBtn">
                        <FaTrash />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <div style={fixedImageWidth}>
                  <h5 style={{ color: "#3c97bf" }}>{post.title}</h5>
                  <p>{post.text}</p>
                  {post.image && (
                    <Image
                      src={post.image}
                      fluid
                      className="rounded"
                      style={{ width: "100%" }}
                    />
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Button variant="primary" className="postBtn">Apply for Job</Button>
                <div className="d-flex align-items-center">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        {likes.length > 0 ? likes.join(", ") : "No likes yet"}
                      </Tooltip>
                    }
                  >
                    <Button
                      variant={isLiked ? "primary" : "outline-secondary"}
                      className="me-2 postBtn"
                      onClick={handleLike}
                    >
                      <FaRegThumbsUp className="me-1" />
                      {likes.length}
                    </Button>
                  </OverlayTrigger>
                  <Button className="postBtn"
                    variant="primary"
                    onClick={() => setCommentInputVisible(!commentInputVisible)}
                    style={{ cursor: "pointer" }} 
                  >
                    Comment
                  </Button>
                </div>
              </div>
              <hr />
              {/* Toggle visibility of comment input */}

              {commentInputVisible && (
                <Form onSubmit={handleCommentSubmit}>
                  <h6>Comments</h6>
                  <InputGroup className="mb-3">
                    <Form.Control
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
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                      roundedCircle
                      width={40}
                      height={40}
                      className="me-3"
                    />
                    <div>
                      <h6 className="mb-0">{comment.name}</h6>
                      <small className="text-muted">{comment.text}</small>
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
                ))}
                {comments.length > 1 && (
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
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
