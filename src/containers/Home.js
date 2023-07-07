import "../styles/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "../store/action";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setLoginError("Please provide both username and password.");
      return;
    }
    if (!username.trim() || !password.trim()) {
      setLoginError("Please provide both username and password.");
      return;
    }

    setUsername("");
    setPassword("");
    setLoginError("");
    setLoginSuccess("Login successful!");

    navigate("/chat");
    dispatch(setLoginStatus(true));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if signup username and password are provided
    if (!signupUsername || !signupPassword) {
      setSignupError("Please provide both username and password.");
      return;
    }
    if (!signupUsername.trim() || !signupPassword.trim()) {
      setSignupError("Please provide both username and password.");
      return;
    }

    setSignupUsername("");
    setSignupPassword("");
    setSignupError("");
    setSignupSuccess("Signup successful!");
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="full-page">
        <div className="login-page">
          <div className="info-container">
            <h1>MonkeLabs Test</h1>
            <h1>Lets begin with the chatting!</h1>
          </div>
          <div className="login-signup-container">
            <div className="login-container">
              <h2 className="login-title">Login</h2>
              {loginError && <div className="error-message">{loginError}</div>}
              {loginSuccess && (
                <div className="success-message">{loginSuccess}</div>
              )}
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="login-username">Username:</label>
                  <input
                    type="text"
                    id="login-username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="input-group"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password">Password:</label>
                  <input
                    type="password"
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-group"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
            <div className="signup-container">
              <h2 className="signup-title">Sign Up Now</h2>
              {signupError && (
                <div className="error-message">{signupError}</div>
              )}
              {signupSuccess && (
                <div className="success-message">{signupSuccess}</div>
              )}
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label htmlFor="signup-username">Username:</label>
                  <input
                    type="text"
                    id="signup-username"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                    className="input-group"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">Password:</label>
                  <input
                    type="password"
                    id="signup-password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="input-group"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Login;
