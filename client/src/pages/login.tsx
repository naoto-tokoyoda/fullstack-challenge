import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import Link from 'next/link'; 

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:1337/api/auth/local/', 
      {
        header:{
          'Content-Type': 'application/json',
        },
        identifier,
        password,
      });

      console.log('Login successful:', response.data);
      login(response.data.user, response.data.jwt);
      localStorage.setItem('jwt', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      console.log('Navigating to home page');
      router.replace('/content');

    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center my-4">Login</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="mt-4">
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
            Email or Username:
          </label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <p>
            Don't Have an account?
          </p>
          <Link href="/register" className="text-indigo-600 hover:text-indigo-800">
                Register here
            </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
