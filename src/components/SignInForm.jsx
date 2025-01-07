import React, { useState } from "react";
import logo from '../assets/logo1.png';
import eyeIcon from '../assets/image.png'; // Replace with your image path

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <div className="flex justify-center items-center mb-4">
        <img src={logo} alt="logo image" />
      </div>

      <h2 className="text-2xl text-gray-800 mb-2 text-center font-sans">Sign In</h2>
      <p className="text-gray-500 mb-6 text-center">Welcome back! Please enter your details</p>

      <form>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center focus:outline-none"
            >
              <img
                src={eyeIcon}
                alt="Toggle Password Visibility"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="form-checkbox text-blue-500 rounded" />
            <span className="ml-2">Remember for 30 Days</span>
          </label>
          <a href="/forgot-password" className="text-blue-500 hover:underline text-sm font-bold">
            Forgot password
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">OR</p>
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-full">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition w-auto md:w-[200px]">
            <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium">Sign up with Google</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition w-auto md:w-[200px]">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-3 h-5" />
            <span className="text-sm font-medium">Sign up with Facebook</span>
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-gray-500">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-black hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
