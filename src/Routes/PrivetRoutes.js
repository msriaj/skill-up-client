import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext/UserContext";

export const PrivetRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (user?.uid) {
    return children;
  } else {
    navigate("/login");
  }
};
