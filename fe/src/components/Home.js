import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import '../App.min.css';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, Link } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import UserIcon from '@mui/icons-material/AccountCircle';
import UnknownIcon from '@mui/icons-material/QuestionMark';
import Settings from './Settings';
import Chat from './Chat';

function Home() {
  const {logoutUser} = useContext(AuthContext);
  const [home_main, set_home_main] = useState(<Settings/>);
  const drawerWidth = 75;
  const icon_top = (index) => {
    if(index === 0) {
        return <MailIcon sx={{color: 'white'}}/>;
    } else {
        return <UnknownIcon sx={{color: 'white'}}/>;
    }
  }
  const home_display = (home_dis) => {
    if(home_dis === "Settings") {
      set_home_main(<Settings/>);
    } else if(home_dis === "Chat") {
      set_home_main(<Chat/>);
    } else {
      set_home_main(null);
    }
  }
  return (
    <Box className="container">
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: '#0f72bd',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }
        }}
        sx={{
          width: drawerWidth,
          height: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box className="navbar-top">
          <Box className='navbar-header'>
            <Link className="navbar-logo" href="/">
              <img src={require("../images/logo.png")} alt="Logo"/>
            </Link>
          </Box>
          <List disablePadding>
            {['Chat','Site Selector', 'Plan', 'Manage', 'Report'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{height: 70, borderBottom: '1px solid #0161aa',}} onClick={() => home_display(text)}>
                  <ListItemIcon sx={{paddingLeft: '10px'}}>
                    {icon_top(index)}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="navbar-bottom">
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderTop: '1px solid #0161aa',}} onClick={() => logoutUser()}>
                <ListItemIcon sx={{paddingLeft: '10px'}}>
                  <UserIcon sx={{color: 'white'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderTop: '1px solid #0161aa',}} onClick={() => set_home_main(<Settings/>)}>
                <ListItemIcon sx={{paddingLeft: '10px'}}>
                  <SettingsIcon sx={{color: 'white'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {home_main}
    </Box>
  );
}

export default Home;
