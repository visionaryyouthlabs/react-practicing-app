import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: HomePage},
            {path: "login", Component: Login},
            {path: "register", Component: Register},
        ],
    },
])

export default router