import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }

    setLoading(true);

    // Simulate authentication (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      if (email === 'user@example.com' && password === 'password123') {
        localStorage.setItem('userName', 'John Doe');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password.');
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="welcome-message">
          <h2>Welcome to Medi-Claims Portal</h2>
          <p>Please log in to continue.</p>
        </div>
        <form onSubmit={handleSubmit} aria-label="Login Form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <a href="/forgot-password" className="forgot-link">Forgot password?</a>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}

export default LoginPage;