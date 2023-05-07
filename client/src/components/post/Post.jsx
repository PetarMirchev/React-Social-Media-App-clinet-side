import React from 'react';
import'./post.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from '@mui/material';
import Comments from '../comments/Comments.jsx';
import {useState} from 'react';



const Post = ({post}) => {
  // control visibility on comments
  const [commentOpen, setCommentOpen] = useState(false);


//temporary like icons functionality
const liked = false;

  return (
    <div className='post'>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt=""/>
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                <span className='name'>{post.name}</span>  
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <div className="moreOptions">
            <MoreHorizIcon/>
          </div>
        </div>
        <div className="content">
          <img src={post.img} alt=""/>
          <p>{post.desc}</p>
        </div>
        <div className="info">
          <div className="item">
            {/* if liked 1 icon else show second icon */}
            {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/> }
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
           <TextsmsOutlinedIcon/>
            18 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            Share
          </div>
        </div>
        {/* onClick show or hide comments  */}
        {commentOpen && <Comments/>}
      </div>
    </div>
  )
}

export default Post