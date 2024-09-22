import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Add your styles here

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={() => navigate("/amr-login")}>AMR Login</button>
      <button onClick={() => navigate("/student-login")}>Student Login</button>
      <button onClick={() => navigate("/college-login")}>College Registration</button>
    </div>
  );
}

export default Login;
