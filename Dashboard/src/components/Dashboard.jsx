import React from "react";
import { Outlet } from "react-router-dom";
import WatchList from "./WatchList";

function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* <GeneralContextProvider> */}
            <WatchList />
            {/* </GeneralContextProvider> */}
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
