import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../layouts/Profile";
import Settings from "../components/profile/Settings";
import AboutPage from "../pages/AboutPage";
import ProtectedRoute from "./ProtectedRoute";
import UsersList from "../components/profile/UsersList";
import Tasks from "../components/profile/Tasks";
import AdminList from "../components/profile/AdminList";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: HomePage },
            { path: "login", Component: Login },
            { path: "register", Component: Register },
            {
                element: <ProtectedRoute />,
                children: [
                    { path: "about", element: <AboutPage></AboutPage> },
                    {
                        Component: Profile,
                        children: [
                            { path: "settings", element: <Settings></Settings> },
                            { path: "users-list", element: <UsersList /> },
                            { path: "admin-list", element: <AdminList /> },
                            { path: "tasks", element: <Tasks /> }
                        ]
                    }
                ]
            },
            {
                path: "profile",
                Component: Profile,
                children: [
                    { path: "settings", element: <Settings></Settings> },
                    { path: "users-list", element: <UsersList /> },
                    { path: "admin-list", element: <AdminList /> },
                    { path: "tasks", element: <Tasks /> }
                ]
            }
        ],
    }
])

export default router