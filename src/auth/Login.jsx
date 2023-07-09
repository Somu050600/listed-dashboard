import React from "react";
import "./Login.css";

function Login(props) {
  return (
    <div className="login-continer">
      <div className="login-left-container">
        <strong>Board.</strong>
      </div>
      <div className="login-right-container">
        <div className="login-form-parent-container">
          <strong>Sign In</strong>
          <span>Sign in to your account</span>
          <div className="social-media-login">
            <div className="login-google">Google Login</div>
            <div className="login-apple">Apple Login</div>
          </div>
          <form action="" className="login-form">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Johndoe@gmail.com" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="········" />
            <a href="/">Forgot password?</a>
            <button type="submit">Sign In</button>
          </form>
          <div style={{ textAlign: "center" }}>
            <span>
              Don't have an account? <a href="/">Register here</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
