import { createBrowserRouter } from "react-router-dom"
import LogIn from "../Pages/LogIn"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn></LogIn>,
    }


])

export default router;