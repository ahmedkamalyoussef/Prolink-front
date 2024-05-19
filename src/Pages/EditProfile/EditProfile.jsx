import React, { useState, useEffect, useRef } from "react";
import { fetchUserData, editUserData, editPicData,editBackImgData } from "../../Api/User";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Upload } from "react-bootstrap-icons";
import NavbarC from "../../Components/Navbar/Navbar";
import "./EditProfile.css";

function EditProfile() {
  const [userData, setUserData] = useState({});
  const [skills, setSkills] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const jobTitleRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleFetchUserData = async () => {
      try {
        const response = await fetchUserData();
        setUserData(response.data);
        if (response.data.skill) {
          setSkills(response.data.skill);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    handleFetchUserData();
  }, []);

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(",").map((skill) => skill.trim());
    setSkills(skillsArray);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    setBackgroundImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUserData = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        jopTitle: jobTitleRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        description: descriptionRef.current.value,
        skill: skills,
      };

      await editUserData(updatedUserData);
      console.log("User data updated successfully:", updatedUserData);

      if (profilePicture) {
        await editPicData(profilePicture);
        console.log("Profile picture updated successfully.");
      }

      if (backgroundImage) {
        await editBackImgData(backgroundImage); 
        console.log("Background image updated successfully.");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <>
      <NavbarC />
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4" />
        <Row>
          <Col xl={4}>
            <Card className="mb-4 mb-xl-0">
              <Card.Header>Profile Picture</Card.Header>
              <Card.Body className="text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <Form.Label className="btn btn-info editPbtn">
                  <Upload className="me-2" />
                  Upload new image
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    style={{ display: "none" }}
                  />
                </Form.Label>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={8}>
            <Card className="mb-4">
              <Card.Header>Account Details</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row className="gx-3 mb-3">
                    <Col md={6}>
                      <Form.Group controlId="inputFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your first name"
                          defaultValue={userData.firstName}
                          ref={firstNameRef}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="inputLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your last name"
                          defaultValue={userData.lastName}
                          ref={lastNameRef}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="gx-3 mb-3">
                    <Col md={6}>
                      <Form.Group controlId="jobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your job title"
                          defaultValue={userData.jopTitle}
                          ref={jobTitleRef}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="PhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your phone number"
                          defaultValue={userData.phoneNumber}
                          ref={phoneNumberRef}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tell people about you"
                      defaultValue={userData.description}
                      ref={descriptionRef}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Skills">
                    <Form.Label>Skills (comma-separated)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your skills separated by commas"
                      value={skills.join(", ")}
                      onChange={handleSkillsChange}
                      ref={skillsRef}
                    />
                  </Form.Group>
                  <Button variant="info" type="submit">
                    Save changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <Card className="mb-4 mt-4">
              <Card.Header>Background Image</Card.Header>
              <Card.Body className="text-center">
                <img
                  className="img-account-background mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <Form.Label className="btn btn-info editPbtn">
                  <Upload className="me-2" />
                  Upload new background
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleBackgroundImageChange}
                    style={{ display: "none" }}
                  />
                </Form.Label>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EditProfile;
