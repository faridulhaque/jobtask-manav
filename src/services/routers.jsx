import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";



const routers = createBrowserRouter([
    {
        path: "/",
        element: (
                <App></App>
        )
    },
    {
        path: "/home",
        element: (
            <HomePage></HomePage>
        )
    },



])
export default routers;