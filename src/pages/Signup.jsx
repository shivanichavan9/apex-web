import React from "react";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <h2 className="signup-title">Signup</h2>
          <form>
            <label className="signup-label">Name</label>
            <input
              type="text"
              className="signup-input"
              placeholder="Enter your name"
            />
            <label className="signup-label">Email</label>
            <input
              type="email"
              className="signup-input"
              placeholder="Enter your email"
            />
            <label className="signup-label">Password</label>
            <input
              type="password"
              className="signup-input"
              placeholder="Enter a password"
            />
            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
