import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { decodeJwt } from "jose";

function Login(props) {
  const navigate = useNavigate();

  const homeHandler = (credentialResponse, error) => {
    if (error) {
      alert("Some error occurred");
    } else {
      const { credential } = credentialResponse;
      const payload = credential ? decodeJwt(credential) : undefined;
      console.log(payload);
      const profilePhoto = payload.picture;
      const name = payload.name;
      console.log(profilePhoto);
      setTimeout(() => {
        navigate(`/home?photo=${profilePhoto}&name=${name}`);
      }, 500);
    }
  };

  const handleSubmit = () => {
    navigate("/home");
  };

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
            <div className="login-google" onClick={handleSubmit}>
              <div style={{ display: "hidden" }}>
                <GoogleOAuthProvider clientId="53240284106-3n37jfpcdv3ke7p6gb2amnhgm1fecds4.apps.googleusercontent.com">
                  <GoogleLogin
                    isSignedIn={true}
                    onSuccess={(credentialResponse) =>
                      homeHandler(credentialResponse)
                    }
                    onError={() => {
                      alert("Login Failed");
                    }}
                    useOneTap
                  />
                </GoogleOAuthProvider>
              </div>
            </div>
            <div className="login-apple" onClick={handleSubmit}>
              <img src={process.env.PUBLIC_URL + "/icons/apple.png"} alt="" />
              Apple Login
            </div>
          </div>
          <form action="" className="login-form">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              required="true"
              placeholder="Johndoe@gmail.com"
            />
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              required="true"
              placeholder="········"
            />
            <a href="/home">Forgot password?</a>
            <button type="submit" onClick={handleSubmit}>
              Sign In
            </button>
          </form>
          <div style={{ textAlign: "center" }}>
            <span>
              Don't have an account? <a href="/home">Register here</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
