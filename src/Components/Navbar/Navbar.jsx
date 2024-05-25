import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Dropdown, Container, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaFacebookMessenger, FaBriefcase, FaUserFriends } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";
import NotificationCard from "../Notification/NotificationCard";
import JobRequestCard from "../JobRequest/JobRequestCard";
import { fetchNotifications } from "../../Api/Notification";
import { fetchUserData } from "../../Api/User";
import { fetchJobRequest } from "../../Api/JobRequest";
import FriendRequest from "../FriendRequest/FriendRequest";
import { fetchFriendRequests } from '../../Api/Friend';

function NavbarC() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFriendRequests, setShowFriendRequests] = useState(false);
  const [showJobRequests, setShowJobRequests] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);
  const navigate = useNavigate();
  const notificationsRef = useRef(null);
  const jobRequestsRef = useRef(null);
  const friendRequestRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const [jobRequests, setJobRequests] = useState([]);
  const [userData, setUserData] = useState({});

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/sign");
  };

  const handleSettings = () => {
    navigate("/editprofile");
  };

  const toggleShowFriendRequests = () => {
    setShowFriendRequests(!showFriendRequests);
  };
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleJobRequests = () => {
    setShowJobRequests(!showJobRequests);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleClickOutside = (event) => {
    if (
      notificationsRef.current &&
      !notificationsRef.current.contains(event.target)
    ) {
      setShowNotifications(false);
    }
    if (
      jobRequestsRef.current &&
      !jobRequestsRef.current.contains(event.target)
    ) {
      setShowJobRequests(false);
    }
    if (
      friendRequestRef.current &&
      !friendRequestRef.current.contains(event.target)
    ) {
      setShowFriendRequests(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    const fetchNotData = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    const handleFetchUserData = async () => {
      try {
        const response = await fetchUserData();
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const handleFetchJobRequests = async () => {
      try {
        const jobRequests = await fetchJobRequest();
        setJobRequests(jobRequests);
      } catch (error) {
        console.error("Error fetching job requests:", error);
      }
    };
    const handleFetchFriendRequests = async () => {
      try {
        const requests = await fetchFriendRequests();
        setFriendRequests(requests);
      } catch (error) {
        console.error("Error fetching friend requests:", error);
      }
    };
    handleFetchFriendRequests();
    handleFetchUserData();
    fetchNotData();
    handleFetchJobRequests();
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar variant="dark" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/home" className="brand-logo">
            ProLink
          </Navbar.Brand>
          <SearchBar />
          <Nav className="navIcons ml-auto d-lg-flex">
            <Nav.Link
              onClick={toggleShowFriendRequests}
              className={`nav-icon ${showFriendRequests ? "active" : ""}`}
            >
              <FaUserFriends size={23} />
            </Nav.Link>
            <Nav.Link
              onClick={toggleNotifications}
              className={`nav-icon ${showNotifications ? "active" : ""}`}
            >
              <FaBell size={23} />
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/chat")} className="nav-icon">
              <FaFacebookMessenger size={23} />
            </Nav.Link>
            <Nav.Link
              onClick={toggleJobRequests}
              className={`nav-icon ${showJobRequests ? "active" : ""}`}
            >
              <FaBriefcase size={23} />
            </Nav.Link>
            <Dropdown align="end" className="dropdown"> {/* Corrected alignRight */}
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="nav-profile-dropdown"
              >
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar5.png"
                  alt="Profile"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`/profile/${userData.id}`}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                <Dropdown.Item onClick={handleSettings}>Settings</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          {showFriendRequests && (
            <Modal show={showFriendRequests} onHide={toggleShowFriendRequests}>
              <Modal.Header closeButton>
                <Modal.Title>Friend Requests</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex flex-column align-items-center">
                {friendRequests.map((friend) => (
                  <FriendRequest key={friend.id} request={friend} />
                ))}
              </Modal.Body>
            </Modal>
          )}

          {showNotifications && (
            <Modal show={showNotifications} onHide={toggleNotifications}>
              <Modal.Header closeButton>
                <Modal.Title>Notifications</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex flex-column align-items-center">
                {notifications.map((notification, index) => (
                  <NotificationCard
                    key={index}
                    timestamp={notification.timestamp}
                    content={notification.content}
                  />
                ))}
              </Modal.Body>
            </Modal>
          )}

          {showJobRequests && (
            <Modal show={showJobRequests} onHide={toggleJobRequests}>
              <Modal.Header closeButton>
                <Modal.Title>Job Requests</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex flex-column align-items-center">
                {jobRequests &&
                  jobRequests.map((jobRequest, index) => (
                    <JobRequestCard
                      key={index}
                      id={jobRequest.id}
                      status={jobRequest.status}
                      dateCreated={jobRequest.dateCreated}
                      sender={jobRequest.sender}
                    />
                  ))}
              </Modal.Body>
            </Modal>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarC;