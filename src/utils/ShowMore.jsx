import React from "react";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ShowMore = () => {
    return (
    <div>
        <div className="judul">
        <InsertCommentIcon style={{marginLeft: '10px', color:'blue', marginTop:'10px'}} />
        <Typography variant="h4" style={{marginLeft: '10px'}}>Anime</Typography>
        <MoreHorizIcon style={{marginTop:'10px', marginRight: '50%'}} />
        </div>
    </div>
    )
}


export default ShowMore;