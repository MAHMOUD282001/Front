import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useProtectedRoute from "../../hooks/useProtectedRoute";

function ProtectedRoute({ role, children }) {
  let [isUser, isAdmin, userData] = useProtectedRoute();

  console.log(isUser);

  if (role === "admin" && isAdmin === false) {
    return <Navigate to="/login" replace />;
  } else if (role === "user" && isUser === false) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
