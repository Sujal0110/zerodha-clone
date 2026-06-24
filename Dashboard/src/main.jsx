import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { RouterProvider } from "react-router-dom";
import Summary from "./components/Summary";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Apps from "./components/Apps";
import ProtectedRoute from './components/ProtectdRoute'

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Summary /> },
            { path: "orders", element: <Orders /> },
            { path: "holdings", element: <Holdings /> },
            { path: "positions", element: <Positions /> },
            { path: "funds", element: <Funds /> },
            { path: "apps", element: <Apps /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
