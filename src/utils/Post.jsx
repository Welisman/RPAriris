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
                <div>🚨 EXCLUSIVE: Bayern are closing in on deal to sign 17   year old talent Nestory Irankunda, here we go! 🌟
                </div>
                <div>2006 born winger on the verge of joining Bayern in 2024 from Australian side Adelaide United.
                    Understand fee verbally agreed is £3m fixed fee divlus add-ons.</div>
                <img className='image' src={Image1} alt='one' />

                <div className="icons">
                    <ChatBubbleOutlineIcon className='icon' />
                    <RepeatIcon className='icon' />
                    <FavoriteBorderIcon className='icon' />
                    <BarChartIcon className='icon' />
                    <BarChartIcon className='icon' />
                    <div className="icon3">
                        <BookmarkBorderIcon className='icon' />\
                        <UploadIcon className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;