import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../layouts/Profile";
import Settings from "../components/profile/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: HomePage},
            {path: "login", Component: Login},
            {path: "register", Component: Register},
            {
                path: "profile",
                Component: Profile,
                children: [
                    {path: "settings", Component: Settings},
                    {path: "Users-list", element: <div>USers list </div>},
                    {path: "admin-list", element: <div>Admin list </div>},
                    {path: "tasks", element: <div>Tasks list </div>}
                ]
            }
        ],
    }
])

export default router