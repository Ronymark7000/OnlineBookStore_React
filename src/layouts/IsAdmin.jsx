import { Navigate, useLocation } from "react-router-dom";

const IsAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const location = useLocation();

  if (user?.role !== "admin") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default IsAdmin;
