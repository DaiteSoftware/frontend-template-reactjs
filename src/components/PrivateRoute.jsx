import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const PrivateRoute = () => {
  const { auth } = useAuth();

  const isAuthenticated = auth?.user;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
