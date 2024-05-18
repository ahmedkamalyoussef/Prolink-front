import React from 'react'
import { useState } from 'react'
import SignInForm from "../../Components/SignIn/SignIn";
import SignUpForm from "../../Components/SignUp/SignUp";
import './Signin_SignupPage.css'

function Signin_SignupPage() {
    const [type, setType] = useState("signIn");
    const handleOnClick = text => {
      if (text !== type) {
        setType(text);
        return;
      }
    };
    const containerClass =
      "signContainer " + (type === "signUp" ? "right-panel-active" : "");
    return (
      <div className="SignCon">
        <h2 className='signH2' style={{color:"#1691ce"}}>Welcome to Proliink</h2>
        <div className={containerClass} id="container">
          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className='signH1'>Welcome Back!</h1>
                <p className='signP'>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost signBtn"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className='signH1'>Hello, Friend!</h1>
                <p className='signP'>Enter your personal details and start journey with us</p>
                <button
                  className="ghost signBtn"
                  id="signUp"
                  onClick={() => handleOnClick("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Signin_SignupPage
