// story.jsx
import React from "react";
import profile from "./profile.png";
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button';

const Story = () => {

    return (
        <div>
            <img className='profile' src={profile} alt='bebasTerserah' />
            <input
                type="text"
                placeholder="Apa yang anda pikirkan"
                className="tweet-input"
            />
            <div className="icons">
                <Button >
                    <ImageIcon className='icon' />
                </Button>
                <Button >
                    <GifBoxIcon className='icon' />
                </Button>
                <Button >
                    <FormatListBulletedIcon className='icon' />
                </Button>
                <Button >
                    <SentimentSatisfiedIcon className='icon' />
                </Button>
                <Button >
                    <PendingActionsIcon className='icon' />
                </Button>
                <Button >
                    <PlaceIcon className='icon' />
                </Button>
                <div className="btn3">
                    <Button variant="contained">Post</Button>
                </div>
            </div>
        </div>
    );
};

export default Story;
