import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "../src/landing_pages/home/HomePage";
import About from "../src/landing_pages/about/About";
import PricingPage from "../src/landing_pages/pricing/PricingPage";
import ProductPage from "./landing_pages/products/ProductPage";
import SignUp from "../src/landing_pages/signup/SignUp";
import SupportPage from "../src/landing_pages/support/SupportPage";
import Navbar from "./landing_pages/Navbar";
import Footer from "./landing_pages/Footer";
import NotFound from "./landing_pages/NotFound";
import LoginPage from "./landing_pages/login/LoginPage";
import { ToastContainer, Flip } from "react-toastify";

function Layout() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/pricing",
                element: <PricingPage />,
            },
            {
                path: "/products",
                element: <ProductPage />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/support",
                element: <SupportPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
