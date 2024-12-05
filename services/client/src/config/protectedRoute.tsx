import React, { useState, useEffect } from "react";
import { getCookie } from "./apiToken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import instance from "./axiosInstance";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = getCookie("token");
  const [user, setUser] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await instance.get("me/");
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return null;
  }

  if (!user || user.is_anonymous || !token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
