import React, { useState } from 'react';
import loginImage from '../assets/hero.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});


  // Form validation function
  const validateForm = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form reload
  
    // Validate the form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password,
      });
  
      // Save the JWT token to localStorage
      localStorage.setItem('token', response.data.token);
      const token = localStorage.getItem('token');
      console.log("token is " + token);
  
      // Redirect to the chatbot or another route
      navigate('/chatbot');
    } catch (err) {
      // Handle specific error responses from the server
      if (err.response) {
        if (err.response.data.error) {
          if (err.response.data.error === "User not found.") {
            setError("User not found. Please check your username.");
          } else if (err.response.data.error === "Invalid password.") {
            setError("Invalid password. Please try again.");
          } else {
            setError(err.response.data.error); // Generic error message
          }
        } else {
          setError("An error occurred. Please try again.");
        }
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };
  

  return (
    <div className="font-poppins min-h-screen bg-black">
      <Navbar/>
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="max-md:mt-8">
            <img
              src={loginImage}
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover py-4 px-8"
              alt="Login"
            />
          </div>
          <div className="border border-gray-400 rounded-lg p-8 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="mb-8">
                <h3 className="text-white text-3xl font-semibold">Log in</h3>
                <p className="text-gray-50 text-sm mt-4 leading-relaxed">Glad you’re back!</p>
              </div>

              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

              <div>
                <label className="text-gray-50 text-sm mb-2 block">Username</label>
                <input
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full bg-transparent text-sm text-gray-50 border ${validationErrors.username ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg`}
                  placeholder="Username"
                />
                {validationErrors.username && (
                  <div className="text-red-500 text-sm">{validationErrors.username}</div>
                )}
              </div>

              <div>
                <label className="text-gray-50 text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-transparent text-sm text-gray-50 border ${validationErrors.password ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg`}
                  placeholder="Password"
                />
                {validationErrors.password && (
                  <div className="text-red-500 text-sm">{validationErrors.password}</div>
                )}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-50">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 tracking-wide rounded-lg font-semibold text-black bg-gradient-to-r from-[#FFC446] to-white focus:outline-none"
                >
                  Log in
                </button>
              </div>

              <div className="text-sm flex justify-center mt-4">
                <a
                  onClick={() => navigate('/forgot-password')}
                  className="text-white hover:underline"
                >
                  Forgot your password?
                </a>
              </div>

              <h1 className="py-3 text-gray-50 flex justify-center">OR</h1>

              <p className="text-sm mt-8 text-center text-gray-50">
                Don't have an account?{' '}
                <a
                  onClick={() => navigate('/signup')}
                  className="text-white font-semibold hover:underline ml-1"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
