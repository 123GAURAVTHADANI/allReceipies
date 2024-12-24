import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function PrivateRoute() {
  const { token, theme } = useContext(AuthContext);
  console.log(">>token", token, theme);
  if (!token) return <Navigate to="/login" />;
  return <Outlet />;
}
export default PrivateRoute;
