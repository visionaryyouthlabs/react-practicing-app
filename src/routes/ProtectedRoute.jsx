import { Children, use } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({children}) => {
    const {user} = use(AuthContext);
    return user ? <Outlet /> : <Navigate to="/login"></Navigate>;
}

export default ProtectedRoute