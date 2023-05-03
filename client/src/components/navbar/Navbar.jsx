import React, { useContext } from 'react';
import './navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {

  //accuses context & darkMode by hook 'useContext'
  const { toggle, darkMode } = useContext(DarkModeContext);
  
  //check user status 
  const {currentUser}= useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className="left">
          <Link to="/" style={{textDecoration: "none"}}>
           <span>Social X</span>      
          </Link>
            <HomeIcon/> 
            {/* darkMode change  by 'toggle function' & icon */}
            { darkMode ? (<LightModeIcon onClick={toggle}/>) : (<DarkModeIcon onClick={toggle}/>) }
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
            <img src={currentUser.profilePic} alt=""/>
            <span>{currentUser.name}</span>
          </div>
        </div>
    </div>
  )
};

export default Navbar;