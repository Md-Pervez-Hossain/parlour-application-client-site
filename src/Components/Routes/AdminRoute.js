import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../CustomHook/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || adminLoading) {
    return <p>Loading....</p>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
