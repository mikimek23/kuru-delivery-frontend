import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth.js';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, isLoading } = useAuth();

  
  if (isLoading) {
    return null; 
  }

  if (!user) {

    const loginPath = requiredRole === 'admin' ? '/adminlogin' : '/login';
    return <Navigate to={loginPath} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    const loginPath = requiredRole === 'admin' ? '/adminlogin' : '/login';
    return <Navigate to={loginPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
