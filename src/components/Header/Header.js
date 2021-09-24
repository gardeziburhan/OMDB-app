import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar'
import { Typography, IconButton} from '@mui/material';
import { Toolbar} from '@mui/material';

import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
// import MenuIcon from "@material-ui/icons/Menu";





const Header = () => {

   
  const [anchorEl, setAnchorEl] = React.useState(null);

  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OMDB App
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </Menu>
            </div>
         
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };



    // <div className="OMDBheader">
    //   <div className="logo">OMDB</div>
    //   <div className="user-login">
    //     Login / SignUp
    //   </div>
    // </div>


export default Header;


// main-color: #0f171e;
// #1a242f
// font-primary: #fffff;
// font-secondary :#79b8f3;
