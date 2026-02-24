import { Outlet } from "react-router"
import Login from "../components/Login"

const AuthLayout = () => {
    return(
        <div>
            <h2>Please Login to your account to access more information</h2>
            <Login />
            <Outlet />
        </div>
    )
}

export default AuthLayout