import React from 'react'
import './style.css';
import { CssBaseline } from '@mui/material';
import logo from "../../assets/logo/long-logo.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottonNavBar';
import MobileSeacrhBar from '../MobileSearchBar';

function Header() {
  return (
    <React.Fragment>
        <CssBaseline/>
        <div className='navBar'>
        <img src={logo} alt="Logo" className='navBar-logo'/>
        <div className='seacrhBar'>
            <div className='searchBarText'>Anywhere</div>
            <div className='searchBarText'>Any week</div>
            <div className='searchBarText2'>Add guests</div>
            <div className='searchIconDiv'>
                <SearchRoundedIcon className='seacrhIcon'/>
            </div>
        </div>
        <div className='profileContainer'>
            <div className='airbnbYourHome'>Airbnb your home</div>
            <div className='airbnbYourHome'> 
            <LanguageIcon sx={{fontSize:'1.3rem'}}/>
            </div>
            <div className='profileDiv'>
                <BasicMenu/>
            </div>
       
        </div>
         
       
        </div>
        {/* <MobileSeacrhBar/> */}
        <SimpleBottomNavigation/>
    </React.Fragment>
    
  )
}

export default Header

