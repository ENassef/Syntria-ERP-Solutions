import { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

// Lazy load route components
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Service = lazy(() => import("./Pages/Service/Service"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Error = lazy(() => import("./Pages/Error/Error"));

function App() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-in-out",
            once: false,
            mirror: true,
        });
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "home",
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "service",
                    element: <Service />,
                },
                {
                    path: "portfolio",
                    element: <Portfolio />,
                },
                {
                    path: "blogs",
                    element: <Blogs />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "*",
                    element: <Error />,
                },
            ],
        },
    ]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;