import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Romano from './Romano.png';
import Image1 from "./Image1.png";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import UploadIcon from '@mui/icons-material/Upload';
import { Typography } from '@mui/material';
import { Button } from "@mui/material";


const Post = () => {
    return (
        <div>
            <div className="pertama">
                <img className='romano' src={Romano} alt='one' />
                <h3 className="nama">Fabrizio Romano</h3>
                <CheckCircleIcon className='checkCircle' />
                <h5 className="tag">@FabrizioRomano</h5>
            </div>

            <div className="paragraf">
                <Typography style={{ marginLeft: '40px' }}>🚨 EXCLUSIVE: Bayern are closing in on deal to sign 17   year old talent Nestory Irankunda, here we go! 🌟
                </Typography>

                <Typography style={{ marginLeft: '40px' }} >2006 born winger on the verge of joining Bayern in 2024 from Australian side Adelaide United.
                    Understand fee verbally agreed is £3m fixed fee divlus add-ons.</Typography>
                    
                <img className='image' src={Image1} alt='one' />

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
                    <Button style={{  marginLeft: '20%'}}>
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

export default Post;