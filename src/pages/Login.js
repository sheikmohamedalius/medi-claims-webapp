import React, { useState } from 'react';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    alert('Login submitted!');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/logo192.png" alt="Logo" style={{ width: 60, marginBottom: 20 }} />
        <h2>Medi-Claims Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  );
}

export default Login;