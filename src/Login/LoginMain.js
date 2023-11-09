import React, { useState } from 'react';
import '../Style/login.css';

const LoginMain = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  return (
    <div>
      <div className="wrapper">
        <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
          <div className="sign-up-container">
            <form>
              <h1>Create Account</h1>
              <div className="social-links">
                <div>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="form_btn" onClick={() => setIsRightPanelActive(false)}>
                Sign Up
              </button>
            </form>
          </div>
          <div className="sign-in-container">
            <form>
              <h1>Sign In</h1>
              <div className="social-links">
                <div>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="form_btn">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button id="signIn" className="overlay_btn">
                Sign In
              </button>
            </div>
            <div className="overlay-right">
              <h1>Hello, Friend</h1>
              <p>Enter your personal details and start journey with us</p>
              <button id="signUp" className="overlay_btn" onClick={() => setIsRightPanelActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
