import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './style.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} className='profileMenuFlex'>
            <MenuRoundedIcon/>
            <AccountCircleRoundedIcon/>
        </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }} sx={{".MuiPaper-root":{borderRadius:'1rem',marginTop:'0.5rem'}}}
      >
        <MenuItem className='menuItems' onClick={handleClose}>Signup</MenuItem>
        <MenuItem className='menuItems' onClick={handleClose}>Login</MenuItem>
        <div style={{height:'1px',backgroundColor:'var(--grey', width:'100%'}}></div>
        <MenuItem className='menuItems' onClick={handleClose}>Airbnb Your Home</MenuItem>
        <MenuItem className='menuItems' onClick={handleClose}>Host and experience</MenuItem>
        <MenuItem className='menuItems' onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}