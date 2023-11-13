import React from "react";
import { Button } from "@mui/material";
import Story from "./Story";
import Post from "./Post";
const NavHome = () => {
    return (
        <div className="bar-home">
            <nav className="nav-home" style={{ position: 'fixed'}}>
                <Button variant="outlined" className="btn">For You</Button>
                <Button variant="outlined" className="btn">Following</Button>
            </nav>
            <div className="story">
                <Story />
            </div>
            <div className="post">
                <Post />
            </div>
        </div>
    );
};
export default NavHome; 