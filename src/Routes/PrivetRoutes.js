import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../Context/UserContext/UserContext";

// export const PrivetRoutes = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   if (user?.uid) {
//     return children;
//   } else {
//     navigate("/login");
//   }
// };

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
