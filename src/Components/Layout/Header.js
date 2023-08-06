import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,NavLink } from 'react-router-dom';
import '../../Styles/Header.css'
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const haldelDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  // menu
  const drawer = (
    <Box onclick={haldelDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant='h6' component={"div"}
        sx={{ flexGrow: 1, my: 2 }}>
        <FastfoodIcon />
        My Resturant
        <Divider />
      </Typography>
      <ul className='mobile-navigation'>
        <li><NavLink activeClassname="active" to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Menu</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
      </ul>
      <toolbar />
    </Box>

  )

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={haldelDrawerToggle} >
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component={"div"}
              sx={{ flexGrow: 1 }}>
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: 'block' } }}>
              <ul className='navigation-menu'>
           
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer variant='temporary' open={mobileOpen} onClose={haldelDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper":
              {
                boxSizing: "border-box",
                width: "240px"
              }
            }}>
            {drawer}
          </Drawer>

        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header