import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Romano from './Romano.png';

const Post = () => {
    return (
        <div>
            <div className="pertama">
                <img className='romano' src={Romano} alt='one' />
                <h3 className="nama">Fabrizio Romano</h3>
                <CheckCircleIcon className='checkCircle' />
            </div>
        </div>
    )
}

export default Post;