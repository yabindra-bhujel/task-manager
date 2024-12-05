import React, { useState } from "react";
import instance from "../../config/axiosInstance";
import { useRegister } from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const { registerUser, error, loading } = useRegister();
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = async (e: { preventDefault: () => void }) => {
   e.preventDefault();
     try {
       await registerUser(formData);
       setFormData({ email: "", password: "" });
       navigate("/login");
     } catch {
     }
   
 };


  return (
    <div className="bg-gray-100 text-gray-800 flex items-center justify-center min-h-screen py-6 px-4">
      <div className="relative w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Create an Account
        </h1>
        <div className="relative w-full transition-transform duration-500">
          <form
            id="registerForm"
            method="post"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="regEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="regEmail"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="regPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="regPassword"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="flex justify-center mt-4">
            <a href="/login" className="text-sm text-blue-500 hover:underline">
              If you already have an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
