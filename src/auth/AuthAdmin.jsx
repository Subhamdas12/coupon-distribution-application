import React from "react";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../features/user/userSlice";
import { Navigate } from "react-router-dom";

const AuthAdmin = ({ children }) => {
  const isAdmin = useSelector(selectIsAdmin);
  if (!isAdmin) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default AuthAdmin;
