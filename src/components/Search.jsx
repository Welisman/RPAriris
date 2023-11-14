import React from "react";
import "../styles/Dashboard.css";
import { Typography } from "@mui/material";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Button } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShowMore from "../utils/ShowMore";

const Search = () => {
    return (
        <div>
            <div className="search">
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input"
                    />
                    <Button>
                        <SettingsApplicationsIcon style={{ color: 'black', marginTop: '15px', marginLeft: '15px' }} />
                    </Button>
                </div>
                <Typography variant="h4" style={{ marginTop: '10px', marginLeft: '40px' }}>Trends For You</Typography>


                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '10px' }}>
                        <Typography variant="H5">Trending in Indonesia</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">One Piece</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="H5">220k Posts</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', float: 'right', marginTop: '-65px', marginRight: '20px' }}>
                        <MoreHorizIcon />
                    </Button>
                </div>


                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '10px' }}>
                        <Typography variant="H5">Trending in Indonesia</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">Kedokteran</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">11.4K posts</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', float: 'right', marginTop: '-65px', marginRight: '20px' }}>
                        <MoreHorizIcon />
                    </Button>
                </div>


                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '10px' }}>
                        <Typography variant="body2">Trending in Indonesia</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">Knock Knock</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">76.1K posts</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', float: 'right', marginTop: '-65px', marginRight: '20px' }}>
                        <MoreHorizIcon />
                    </Button>
                </div>


                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '10px' }}>
                        <Typography variant="body2">Trending in Indonesia</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">Bu Sri</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">2,124 posts</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', float: 'right', marginTop: '-65px', marginRight: '20px' }}>
                        <MoreHorizIcon />
                    </Button>
                </div>


                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '10px' }}>
                        <Typography variant="body2">Trending in Indonesia</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">#ColdplayJakarta</Typography>
                    </Button>
                </div>
                <div>
                    <Button style={{ color: 'black', width: 'auto', marginLeft: '30px', padding: 'none', marginTop: '-20px' }}>
                        <Typography variant="body2">2,411 posts</Typography>
                    </Button>
                </div>
                <Button style={{ color: 'black', float: 'right', marginTop: '-65px', marginRight: '20px' }}>
                    <MoreHorizIcon />
                </Button>

            </div>

            <div className="showmore">
                <ShowMore />
            </div>
        </div>
    );
};
export default Search;