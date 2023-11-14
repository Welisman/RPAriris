import React from "react";
import { Button, Typography } from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';

const Date = () => {
    return (
        <div className="beda">
            <Button style={{ width: '200px', float: 'right', color: 'black', border: '1px solid black', marginTop: '30px', marginRight: '20px' }}>Edit Profil</Button>

            <div className="nama">
                <Typography variant="h4" style={{marginTop:'20%', marginLeft:'20px'}}>Welisman Kristian Maduwu</Typography>
            </div>

            <div className="cal">
            <Typography variant="h6" >@welismanK</Typography>
            
            <div className="lex">
            <DateRangeIcon style={{ marginTop:'5px', display:'flex'}} />
            <Typography variant="body1" style={{ marginTop:'5px' }} >
                Joined October 2022
            </Typography>
            </div>
            </div>

            <div className="foll">
                <Button>
                    <Typography variant="body1" style={{marginLeft:'80%', color: 'black', marginTop: '10px' }}>Following</Typography>
                </Button>
                <Button style={{marginLeft:'80%', color: 'black', marginTop: '10px' }}>
                    <Typography variant="body1" >Followers</Typography>
                </Button>
            </div>

            <div className="head">
                <Button style={{ color: 'black' }}>Posts</Button>
                <Button style={{ marginLeft: '15%', color: 'black' }}>Replies</Button>
                <Button style={{ marginLeft: '15%', color: 'black' }}>Hightlights</Button>
                <Button style={{ marginLeft: '15%', color: 'black' }}>Media</Button>
                <Button style={{ marginLeft: '15%', color: 'black' }}>Likes</Button>
            </div>
        </div>
    )
}

export default Date;