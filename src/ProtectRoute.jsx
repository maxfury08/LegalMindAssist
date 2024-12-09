import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // If the user is not authenticated, redirect to the login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, render the children (protected route)
  return children;
};

export default ProtectedRoute;
