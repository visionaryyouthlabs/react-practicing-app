import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root
    },
    {
        path: "/about",
        element: <div>About page</div>
    }
])

export default router