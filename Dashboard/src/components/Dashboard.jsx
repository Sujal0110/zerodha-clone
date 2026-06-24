import React from "react";
import { Outlet } from "react-router-dom";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
    return (
        <GeneralContextProvider>
            <div className="dashboard-container">
                <WatchList />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </GeneralContextProvider>
    );
}

export default Dashboard;
