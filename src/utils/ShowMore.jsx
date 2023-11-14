import React from "react";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import profile3 from "../utils/profile3.png";
import profile4 from "../utils/profile4.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import UploadIcon from '@mui/icons-material/Upload';
import { Button } from "@mui/material";

const ShowMore = () => {
    return (
        <div style={{ backgroundColor:'rgb(238, 238, 238)', width:'80%'}}>
            <div className="judul" >
                <InsertCommentIcon style={{ marginLeft: '10px', color: 'blue', marginTop: '20px' }} />
                <Typography variant="h4" style={{ marginLeft: '10px', marginTop: '10px' }}>Anime</Typography>
                <MoreHorizIcon style={{ marginTop: '15px', marginLeft:'75%' }} />
            </div>
            <div className="pertama" style={{ width: '80%'}}>
                <img className='romano' src={profile3} alt='profile' />   
                <h3 className="nama">Jujutsu Kaisen</h3>
                <CheckCircleIcon className="checkCircle" />
                <h5 className="tag">@JujutsuTwts</h5>
                <MoreHorizIcon style={{ marginTop: '15px', marginLeft:'80%' }} />
            </div>
            <div className="paragraf">
                <Typography style={{ marginLeft: '40px' }}>Which anime these flowers make you think of?</Typography>
                    
                <img className='image' src={profile4} alt='one' />

                <div className="icon3">
                    <Button>
                        <ChatBubbleOutlineIcon />
                    </Button>
                    <Button style={{ marginLeft: '80px',}}>
                        <RepeatIcon />
                    </Button>
                    <Button style={{ marginLeft: '80px',}}>
                        <FavoriteBorderIcon />
                    </Button>
                    <Button style={{ marginLeft: '80px',}}>
                        <BarChartIcon />
                    </Button>
                    <Button style={{  marginLeft: '15%'}}>
                        <BookmarkBorderIcon />
                    </Button>
                    <Button>
                        <UploadIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default ShowMore;