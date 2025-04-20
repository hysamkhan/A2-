/* frontend file */

import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [page, setPage] = useState('login');

  return (
    <div className="container">
      <h1>Microservices Auth App</h1>
      <div className="nav">
        <button onClick={() => setPage('login')}>Login</button>
        <button onClick={() => setPage('signup')}>Signup</button>
        <button onClick={() => setPage('forgot')}>Forgot Password</button>
      </div>
      {page === 'login' && <Login />}
      {page === 'signup' && <Signup />}
      {page === 'forgot' && <ForgotPassword />}
    </div>
  );
}

export default App;
