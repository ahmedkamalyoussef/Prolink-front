import React, { useState } from "react";
import { register } from "../../Api/LoginAndRegister";
import "../../Pages/Signin_Signup/Signin_SignupPage.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      });

      console.log("Registration response:", response.data);
      alert(`Registration successful: ${response.data.message}`);
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("Registration error:", error.response);
      alert(`Registration failed: ${error.response}`);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit} className="signForm">
        <h4 className='signH4' style={{ color: "#1691ce" }}>Create Account</h4>
        <input
          className="signInput"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          className="signInput"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          className="signInput"
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          className="signInput"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="signInput"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          className="signInput"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button className="signBtn" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
