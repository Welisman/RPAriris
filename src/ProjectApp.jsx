import React from "react";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Post from "./components/Notification";
import Profile from "./components/Profile";
import Home from "./components/Home";
const ProjectApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="Home" element={<Home />}>
                <Route path="About" element={<About />} />
                <Route path="post" element={<Post />} />
                <Route path="Profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};
export default ProjectApp;