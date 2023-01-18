import { createBrowserRouter } from "react-router-dom"
import About from "../components/About"
import ErrorPage from "../components/ErrorPage"
import Homepage from "../components/Homepage"
import Services from "../components/Services"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />
    },
    {
        path: "services",
        element: <Services />
    },
    {
        path: "about-us",
        element: <About />
    }
])