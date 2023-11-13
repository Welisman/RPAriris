import React from "react";
import { Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import Story from "./Story";
import Post from "./Post";
const NavHome = () => {
    return (
        <div className="bar-home">
            <nav className="nav-home" style={{ position: 'fixed'}}>
                <Button variant="outlined" className="btn">For You</Button>
                <Button variant="outlined" className="btn">Following</Button>

                    <button>
                        <SettingsIcon variant="outlined" className="set">Settings</SettingsIcon>
                    </button>
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