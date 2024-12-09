import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/robo.png';
import { IoLogoGithub } from 'react-icons/io';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate username
    if (!formData.username) newErrors.username = "Username is required";

    // Validate password
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Call the signup API endpoint
    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login page if signup is successful
        navigate('/login');
      } else {
        // Handle special error: User already exists
        if (data.error && data.error === "User already exists.") {
          setErrors({ server: "Username already taken, please choose another one." });
        } else {
          // Handle other errors
          setErrors({ server: data.message || "Something went wrong" });
        }
      }
    } catch (error) {
      setErrors({ server: "Network error. Please try again later." });
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
              alt="Signup"
            />
          </div>
          <div className="border border-gray-400 rounded-lg p-8 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-8">
                <h3 className="text-white text-3xl font-semibold">Sign Up</h3>
                <p className="text-gray-50 text-sm mt-4 leading-relaxed">
                  Glad you’re back.! Just some details to get you in.!
                </p>
              </div>

              {/* Username Input */}
              <div>
                <input
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent text-sm text-gray-50 border border-gray-300 px-4 py-3 rounded-lg outline-white"
                  placeholder="Username"
                />
                {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
              </div>

              {/* Password Input */}
              <div>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent text-sm text-gray-50 border border-gray-300 px-4 py-3 rounded-lg outline-white"
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              </div>

              {/* Confirm Password Input */}
              <div>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent text-sm text-gray-50 border border-gray-300 px-4 py-3 rounded-lg outline-white"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full shadow-xl py-3 px-4 tracking-wide rounded-lg font-semibold text-black bg-gradient-to-r from-[#FFC446] to-white focus:outline-none"
                >
                  Sign Up
                </button>
              </div>

              {/* Server Error */}
              {errors.server && (
                <p className="text-red-500 text-center mt-4">{errors.server}</p>
              )}

              <h1 className="py-3 text-gray-50 flex justify-center">OR</h1>

              <div className="space-x-6 flex justify-center mt-8">
                <button type="button" className="border-none outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fbbd00"
                      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    ></path>
                    <path
                      fill="#0f9d58"
                      d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    ></path>
                    <path
                      fill="#31aa52"
                      d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    ></path>
                    <path
                      fill="#3c79e6"
                      d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    ></path>
                    <path
                      fill="#cf2d48"
                      d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 322.567 0 256 0c-21.211 0-41.766 3.446-61.083 9.669 60.418 6.331 113.213 36.248 155.251 87.634z"
                    ></path>
                    <path
                      fill="#2d88c6"
                      d="M256 0C166.758 0 96.721 41.228 63.325 103.474c12.883 9.17 28.759 16.367 45.046 20.758C130.365 85.243 156.5 72 186 72c28.248 0 53.528 19.233 63.801 47.659l55.977-47.659C276.165 12.579 266.216 0 256 0z"
                    ></path>
                  </svg>
                </button>

                <button type="button" className="border-none outline-none">
                  <IoLogoGithub size={40} color="#fff" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
