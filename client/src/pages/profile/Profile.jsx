import React from 'react';
import './profile.scss';
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"



const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.unsplash.com/file-1661973760703-91f50df21c28image?dpr=2&auto=format&fit=crop&w=416&q=60" alt="" className='cover'/>
        <img src="https://images.unsplash.com/photo-1542458579-bc6f69b5ce6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className='profilePic'/>
      </div>
      <div className="profileContainer">
        <div className="userBioInfo">
          <div className="left">
          <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Petar Mirchev</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>BG</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>https://github.com/PetarMirchev</span>         
              </div>         
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>   
    </div>
  )
}

export default Profile