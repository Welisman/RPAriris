import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const LayoutTes = () => {
    return (
        <div className="container">
            <div style={{ display: "flex"}}>
                <div style={{width: "30%"}}>
                    <Sidebar />
                </div>
                <div style={{width: "70%"}}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutTes;