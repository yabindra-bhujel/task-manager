import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="bg-gray-100 text-gray-800 flex items-center justify-center min-h-screen py-6 px-4">
      <div className="relative w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Welcome Back
        </h1>
        <div className="relative w-full transition-transform duration-500">
          <form
            id="loginForm"
            method="post"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>

        <div className="mt-4 text-center">
          <a href="/register" className="text-sm text-blue-500 hover:underline">
            Don't have an account? Register here
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm">Or</p>
          <button
            className="mt-2 w-full px-4 py-2 bg-white text-black rounded-md flex items-center justify-center gap-4 border border-gray-500"
            aria-label="Login with Google"
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google Logo"
              className="w-6 h-6"
            />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
