import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../Context/UserContext/UserContext";

const PrivetRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivetRoutes;
