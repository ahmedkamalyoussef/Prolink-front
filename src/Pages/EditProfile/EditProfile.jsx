import React, { useState, useEffect } from "react";
import { fetchUserData, editUserData, editPicData } from "../../Api/User";

import "./EditProfile.css";
import NavbarC from "../../Components/Navbar/Navbar";

function EditProfile() {
  const [userData, setUserData] = useState({});
  const [skills, setSkills] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null); // State to store the new profile picture

  useEffect(() => {
    const handleFetchUserData = async () => {
      try {
        const response = await fetchUserData();
        setUserData(response.data);
        if (response.data.skills) {
          const skillNames = response.data.skills.map(skill => skill.name);
          setSkills(skillNames);
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

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUserData = {
        ...userData,
        firstName: e.target.inputFirstName.value,
        lastName: e.target.inputLastName.value,
        jopTitle: e.target.jopTitle.value,
        phoneNumber: e.target.PhoneNumber.value,
        description: e.target.Description.value,
        skills: skills.map(skillName => ({ name: skillName }))
      };

      await editUserData(updatedUserData);
      console.log("User data updated successfully:", updatedUserData);

      if (profilePicture) {
        // const formData = new FormData();
        // formData.append('profilePicture', profilePicture); // Append profile picture to FormData
        await editPicData(profilePicture); // Call editPicData with FormData
        console.log("Picture data updated successfully.");
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
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <div className="small font-italic text-muted mb-4"></div>
                <input
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        defaultValue={userData.firstName}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        defaultValue={userData.lastName}
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="jopTitle">
                        Job Title
                      </label>
                      <input
                        className="form-control"
                        id="jopTitle"
                        type="text"
                        placeholder="Enter your job title"
                        defaultValue={userData.jopTitle}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="PhoneNumber">
                        Phone Number
                      </label>
                      <input
                        className="form-control"
                        id="PhoneNumber"
                        type="text"
                        placeholder="Enter your Phone Number"
                        defaultValue={userData.phoneNumber}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="Description">
                      Description
                    </label>
                    <input
                      className="form-control"
                      id="Description"
                      type="text"
                      placeholder="Tell people about you"
                      defaultValue={userData.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="Skills">
                      Skills (comma-separated)
                    </label>
                    <textarea
                      className="form-control"
                      id="Skills"
                      rows="3"
                      placeholder="Enter your skills separated by commas"
                      value={skills.join(", ")}
                      onChange={handleSkillsChange}
                    ></textarea>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
