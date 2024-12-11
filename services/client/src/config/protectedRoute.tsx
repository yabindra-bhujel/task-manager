import React, { useState, useEffect } from "react";
import { getCookie } from "./apiToken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import instance from "./axiosInstance";
import { useUser } from "../provider/UserContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = getCookie("token");
  const {user, loading} = useUser();

  if (loading) {
    return null;
  }

  if (!user || user.is_anonymous || !token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
