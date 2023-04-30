import React from 'react';
import './navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
          <Link to="/" style={{textDecoration: "none"}}>
           <span>Social X</span>      
          </Link>
            <HomeIcon/>
            <DarkModeIcon/>
            <GridViewIcon/>
          <div className="search">
            <SearchIcon/>
            <input type='text' placeholder='search...' />
          </div>
        </div>    
        <div className="right">
          <PersonIcon/>
          <MailIcon/>
          <NotificationsIcon/>
          <div className="user">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            <span>Pepi M</span>
          </div>
        </div>
    </div>
  )
};

export default Navbar;