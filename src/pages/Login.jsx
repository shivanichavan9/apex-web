import React from "react";
   // Make sure you have the corresponding CSS file

const Login = () => {
  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-form">
            <h2 className="login-title">Login</h2>
            <form>
              <label className="login-label">Email</label>
              <input
                type="email"
                className="login-input"
                placeholder="Enter your email"
              />

              <label className="login-label">Password</label>
              <input
                type="password"
                className="login-input"
                placeholder="Enter your password"
              />

              <button
                type="submit"
                className="login-button"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
