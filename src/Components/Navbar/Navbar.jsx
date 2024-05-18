import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaFacebookMessenger, FaBriefcase } from 'react-icons/fa';
import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';
import NotificationCard from '../Notification/NotificationCard';
import JobRequestCard from '../JobRequest/JobRequestCard';

function NavbarC() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showJobRequests, setShowJobRequests] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const notificationsRef = useRef(null);
  const jobRequestsRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/sign');
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
    if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
    if (jobRequestsRef.current && !jobRequestsRef.current.contains(event.target)) {
      setShowJobRequests(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Navbar variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/home" className="brand-logo">ProLink</Navbar.Brand>
        <SearchBar />
        <Nav className="ml-auto d-none d-lg-flex">
          <Nav.Link onClick={toggleNotifications} className={`nav-icon ${showNotifications ? 'active' : ''}`}>
            <FaBell size={23} />
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/chat')} className="nav-icon">
            <FaFacebookMessenger size={23} />
          </Nav.Link>
          <Nav.Link onClick={toggleJobRequests} className={`nav-icon ${showJobRequests ? 'active' : ''}`}>
            <FaBriefcase size={23} />
          </Nav.Link>
          <Dropdown alignRight className='dropdown'>
            <Dropdown.Toggle variant="" id="dropdown-basic" className="nav-profile-dropdown">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Profile" className="rounded-circle" width="40" height="40" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav className="ml-auto d-flex d-lg-none">
          <Dropdown alignRight className='dropdown'>
            <Dropdown.Toggle variant="" id="dropdown-basic" className="nav-profile-dropdown">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Profile" className="rounded-circle" width="40" height="40" />
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu-right'>
              <SearchBar />
              <Dropdown.Item onClick={toggleNotifications}>Notifications <FaBell /></Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/chat')}>Messages <FaFacebookMessenger /></Dropdown.Item>
              <Dropdown.Item onClick={toggleJobRequests}>Job Requests <FaBriefcase /></Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        {showNotifications && (
          <div ref={notificationsRef} className="notification-dropdown">
            <h5>Notifications</h5>
            <NotificationCard
              profilePic="https://bootdey.com/img/Content/avatar/avatar5.png"
              name="John Doe"
              content="You have a new message from Alice."
            />
            <NotificationCard
              profilePic="https://bootdey.com/img/Content/avatar/avatar5.png"
              name="John Doe"
              content="You have a new message from Alice."
            />
            <NotificationCard
              profilePic="https://bootdey.com/img/Content/avatar/avatar5.png"
              name="John Doe"
              content="You have a new message from Alice."
            />
            <NotificationCard
              profilePic="https://bootdey.com/img/Content/avatar/avatar5.png"
              name="John Doe"
              content="You have a new message from Alice."
            />
          </div>
        )}
        {showJobRequests && (
          <div ref={jobRequestsRef} className="job-requests-dropdown">
            <h5>Job Requests</h5>
            <JobRequestCard
              profilePic="https://via.placeholder.com/50"
              name="John Doe"
              content="John has requested to join your project."
              // onAccept={handleAccept}
              // onDeny={handleDeny}
            />
            <JobRequestCard
              profilePic="https://via.placeholder.com/50"
              name="John Doe"
              content="John has requested to join your project."
              // onAccept={}
              // onDeny={}
            />
            <JobRequestCard
              profilePic="https://via.placeholder.com/50"
              name="John Doe"
              content="John has requested to join your project."
              // onAccept={}
              // onDeny={}
            />
            <JobRequestCard
              profilePic="https://via.placeholder.com/50"
              name="John Doe"
              content="John has requested to join your project."
              // onAccept={}
              // onDeny={}
            />
            <JobRequestCard
              profilePic="https://via.placeholder.com/50"
              name="John Doe"
              content="John has requested to join your project."
              // onAccept={}
              // onDeny={}
            />
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarC;
