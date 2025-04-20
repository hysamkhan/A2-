import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" required onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
      <p>{msg}</p>
    </form>
  );
}

export default Login;
