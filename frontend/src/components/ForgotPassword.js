import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/forgot-password', { email });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <form onSubmit={handleForgot}>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
      <p>{msg}</p>
    </form>
  );
}

export default ForgotPassword;
