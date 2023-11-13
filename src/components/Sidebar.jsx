import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
const Sidebar = () => {
    return (
        <div className="sidebar">
             <div className="logo">Study</div>
            <nav className="nav-menu">
                <ul>
                    <li>
                        <Link to="/Home"><HomeIcon></HomeIcon></Link>
                    </li>
                    <li>
                        <Link to="/Home/About">About</Link>
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