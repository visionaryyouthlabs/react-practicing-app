import { use } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedRoute = () => {
    const {user} = use(AuthContext);
    const location = useLocation();
    return user ? <Outlet /> : <Navigate to="login" state={location.pathname}></Navigate>;
}

export default ProtectedRoute