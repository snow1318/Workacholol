// Login.js
import React, { useState } from 'react';

const Login = () => {
  // Local state for username, password, and error messages.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handler for form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication check (replace with API call in production)
    if (username === 'admin' && password === 'password123') {
      alert('Login successful!');
      // You can perform a redirect here using react-router-dom, e.g.:
      // history.push('/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

// Inline CSS styles for simplicity.
const styles = {
  container: {
    width: '300px',
    margin: '100px auto',
    padding: '30px',
    background: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '10px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '3px'
  },
  button: {
    padding: '10px',
    background: '#5cb85c',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  }
};

export default Login;

  