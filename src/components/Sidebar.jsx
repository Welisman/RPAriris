import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const Sidebar = () => {
    return (
        <div className="sidebar">
             <Typography variant="h3" className="logo">SUNDAY</Typography>
            <nav className="nav-menu">
                <ul>
                    <li>
                        <Link to="/Home"><HomeIcon>Home</HomeIcon></Link>
                    </li>
                    <li>
                        <Link to="/Home/Search"><SearchIcon>Search</SearchIcon></Link>
                    </li>
                    <li>
                        <Link to="/Home/Notification">Notification</Link>
                    </li>
                    <li>
                        <Link to="/Home/Profile ">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Sidebar;