import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <p>Not have an account?<a href="/signup" className="ml-2 hover:text-sky-700 text-sky-500">SignUp</a></p>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;