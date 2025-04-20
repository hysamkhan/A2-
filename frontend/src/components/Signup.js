import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/signup', form);
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" required onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" required onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Signup</button>
      <p>{msg}</p>
    </form>
  );
}

export default Signup;
