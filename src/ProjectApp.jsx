import React from "react";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import LayoutTes from "./components/LayoutTes";
import Notification from "./components/Notification";
import Search from "./components/Search";


const ProjectApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home/" element={<LayoutTes />} >
                <Route index element={<Home />}/>
                <Route path="Search" element={<Search />} />
                <Route path="Notification" element={<Notification />} />
                <Route path="Profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};
export default ProjectApp;