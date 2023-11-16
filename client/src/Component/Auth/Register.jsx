import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        email,
        password,
      });
      setError('Registration successful')
    } catch (error) {
      console.error('Registration failed:', error.message);
      console.log(error.message);
      setError('Registration failed. Please try again.'); 
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-green-700">
        <div className="bg-white p-8 rounded shadow-md md:w-96 w-full">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          {error && (
            <div className="bg-red-500 text-white p-2 rounded-md mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;