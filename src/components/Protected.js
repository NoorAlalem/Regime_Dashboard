import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../store/login-context';
function Protected() {
  const { token } = useAuth();
  console.log(token, 'token');
  if (!token) {
    return <Navigate to='/login' />;
  }
  return <Outlet />;
}
export default Protected;
