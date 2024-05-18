import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { login } from "../../Api/LoginAndRegister";
import '../../Pages/Signin_Signup/Signin_SignupPage.css';

function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  //  const navigate = useNavigate(); 

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    console.log("Form data submitted:", formData);
    try {
      const response = await login(formData);
      console.log("Response from server:", response);
      localStorage.setItem('authToken', response.data.token); 
      // navigate('/home');
      setFormData({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log("Error response:", error);
      alert(`Login failed: ${error.response?.data?.message}`);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit} className="signForm">
        <h4 className='signH4' style={{ color: "#1691ce" }}>Sign in</h4>
        <input
          className="signInput"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="signInput"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <a className='signA' href="#">Forgot your password?</a>
        <button className="signBtn" type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
