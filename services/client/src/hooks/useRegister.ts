import { useState, useEffect } from "react";
import instance from "../config/axiosInstance";

export const useRegister = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const registerUser = async (formData: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await instance.post("/register", formData);

      if (response.status !== 201) {
        throw new Error("Failed to register");
      }
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Registration failed");
      } else {
        setError(error.message || "An unexpected error occurred");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return { registerUser, error, loading };
};
