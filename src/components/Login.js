import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === 'admin' && pass === '1234') {
      onLogin(true);
    } else {
      alert("Try admin / 1234");
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="card" onSubmit={handleLogin}>
        <h3>Portal Login</h3>
        <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;