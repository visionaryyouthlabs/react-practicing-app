import { use } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router";
import Loading from "../components/Loading";

const ProtectedRoute = () => {
    const {user, loading} = use(AuthContext);
    return user ? <Outlet /> : <Navigate to="login"></Navigate>;
}

export default ProtectedRoute