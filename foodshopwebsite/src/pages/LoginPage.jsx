import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/LoginPage.css'
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(username, password);
      console.log(result.user);
      localStorage.setItem('user', JSON.stringify(result.user));

      setMessage(result.message);
      if (result.success && result.user.role === 1) {
        navigate('/')
      }
      else if (result.success && result.user.role === 2) {
        navigate('/menu')
      }
      else {
        navigate('/login')
      }
    }
    catch (error) {
      console.log(error)
    }
  };
  
  return (
    <div className="login-container bg-dark">
      <div className="login-box">
        <h2 className="text-center">🍽️ Welcome to Lethimcook</h2>
        <p className="text-center text-muted">Log in to order your favorite dishes!</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="username" value={username} placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" value={password} placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Log In
          </button>
          
          
        </form>
        <button type="submit" className="btn btn-warning w-100 mt-3">
            <a href="/" className="text-decoration-none text-light">Return</a>
          </button>
        <p className="text-center">{message}</p>
      </div>
    </div>
  );
};

export default LoginPage;
