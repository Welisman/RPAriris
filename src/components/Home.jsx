import React from "react";
import "../styles/Dashboard.css";
import NavHome from "../utils/NavHome.jsx";

const Home = () => {
    return (
        <div className="dashboard-container">
                <NavHome />
                {/* <Sidebar /> */}
        </div>
    );
};
export default Home;
