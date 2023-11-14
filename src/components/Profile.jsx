import React from "react";
import "../styles/Profile.css";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import profile2 from "../utils/profile2.png";
import profile from "../utils/profile.png"
import Date from "../utils/Date";


const Profile = () => {
    return (
        <div>
            <div className="nav-profil">
                <Button style={{ color: 'black' }}>
                    <ArrowBackIcon style={{ marginLeft: '10px', marginTop: '5px' }} />
                </Button>
                <Typography variant="h5" style={{ marginLeft: '15%', marginTop: '-30px' }}>Welisman Kristian Maduwu</Typography>
            </div>

            <div className="back-img" style={{ width: '84%' }}>
                <img src={profile2} alt="profile" style={{ width: '100%', marginTop: '6%' }} />
            </div>

            <Button style={{ borderRadius: '50%', height: '200px', width: '210px', marginTop: '-100px', marginLeft: '20px' }}>
                <img src={profile} alt="profil" style={{ borderRadius: '50%', height: '200px', width: '210px'}} />
            </Button>

            <div className="date">
                <Date />
            </div>
        </div>
    )
}

export default Profile;