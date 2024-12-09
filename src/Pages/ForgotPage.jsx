import React from 'react'
import loginImage from '../assets/hero.png'
import { IoLogoGithub } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
const ForgotPage = () => {
    const navigate =useNavigate();
  return (
    <div class="font-poppins min-h-screen bg-black">
      <Navbar/>
      <div class="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div class="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div class=" max-md:mt-8">
            <img src={loginImage} class="w-full h-full max-md:w-4/5 mx-auto block object-cover py-4 px-8" alt="Dining Experience" />
          </div>
          <div class="border border-gray-400  rounded-lg p-8 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form class="space-y-4">
              <div class="mb-8">
                <h3 class="text-white text-3xl font-semibold">Forgot Password ?</h3>
                <p class="text-gray-50 text-sm mt-4 leading-relaxed">Please enter you’re email!</p>
              </div>

              <div>
                <label class="text-gray-50 text-sm mb-2 block">User name</label>
                <div class="relative flex items-center">
                  <input name="username" type="text" required class="w-full  bg-transparent text-sm text-gray-50 border border-gray-300 px-4 py-3 rounded-lg outline-white" placeholder="User name" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div class="!mt-8">
                <button type="button" class="w-full shadow-xl py-3 px-4  tracking-wide rounded-lg font-semibold text-black bg-gradient-to-r from-[#FFC446]  to-white focus:outline-none">
                  Reset Password   
                </button>
              </div>
              <p class="text-sm !mt-8 text-center text-gray-50">Don't have an account <a onClick={()=>navigate('/signup')} class="text-white font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a></p>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ForgotPage