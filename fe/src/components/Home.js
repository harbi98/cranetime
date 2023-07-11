import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import '../App.min.css';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, Link, IconButton, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/EmailOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import UserIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Settings from './Settings';
import Chat from './Chat';

function Home() {
  const AdminButton = styled(Button)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0f72bd',
    marginBottom: '10px',
    padding: '15px 30px 10px 20px',
    minHeight: '70px',
    borderRadius: '3px',
    textTransform: 'none',
    textDecoration: 'none',
    transition: 'all .3s',
    fontWeight: '400',
    fontSize: '1rem',
    color: '#fff',
    width: '100%',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#004f8a',
      boxShadow: 'none',
    }
  });
  const ListButton = styled(Button)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0f72bd',
    marginBottom: '10px',
    padding: '15px 30px 10px 20px',
    minHeight: '70px',
    borderRadius: '3px',
    textTransform: 'none',
    textDecoration: 'none',
    transition: 'all .3s',
    'p.sub_title': {
      color: '#00477d'
    },
    fontWeight: '300',
    color: '#fff',
    width: '100%',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#004f8a',
      boxShadow: 'none',
      'p.site_hover':{
        color: '#bbdefb'
      }
    }
  });
  const {logoutUser} = useContext(AuthContext);
  const [home_main, set_home_main] = useState(<Settings/>);
  const [showSitePicker, setShowSitePicker] = useState(false);
  const drawerWidth = 70;
  return (
    <div className="container">
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
        <div className="navbar-top">
          <div className='navbar-header'>
            <Link className="navbar-logo" href="/">
              <img src={require("../images/logo.png")} alt="Logo"/>
            </Link>
          </div>
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderBottom: '1px solid #0161aa', padding: '0', justifyContent: 'center'}} onClick={() => setShowSitePicker(!showSitePicker)}>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <LocationIcon sx={{color: '#bbdefb', height: '32px', width: '32px'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderBottom: '1px solid #0161aa', padding: '0', justifyContent: 'center'}} onClick={() => set_home_main(<Chat/>)}>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <MailIcon sx={{color: '#bbdefb', height: '32px', width: '32px'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderBottom: '1px solid #0161aa', padding: '0', justifyContent: 'center'}}>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <CalendarTodayOutlinedIcon sx={{color: '#bbdefb', height: '32px', width: '32px'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderBottom: '1px solid #0161aa', padding: '0', justifyContent: 'center'}}>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <ShowChartOutlinedIcon sx={{color: '#bbdefb', height: '32px', width: '32px'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderBottom: '1px solid #0161aa', padding: '0', justifyContent: 'center'}}>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <PieChartOutlinedIcon sx={{color: '#bbdefb', height: '32px', width: '32px'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className="navbar-bottom">
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderTop: '1px solid #0161aa', padding: '0', justifyContent: 'center'}} onClick={() => logoutUser()}>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <UserIcon sx={{color: '#bbdefb', height: '32px', width: '32px'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{height: 70, borderTop: '1px solid #0161aa', padding: '0', justifyContent: 'center'}} onClick={() => set_home_main(<Settings/>)}>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <SettingsIcon sx={{color: '#bbdefb', height: '32px', width: '32px'}}/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
      {showSitePicker ?
          <div style={{
            position: 'absolute',
            top: 0,
            left: '70px',
            backgroundColor: '#0060a8',
            width: '420px',
            transform: 'translateX(0)',
            transition: 'all .3s',
            height: '100%',
            zIndex: 35,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#096bb5',
              height: '65px',
              padding: '10px 15px 10px 24px',
              borderBottom: '1px solid rgba(0, 86, 150, .7)'
            }}>
              <p style={{
                color: '#fff',
                fontSize: '1.375rem',
                fontWeight: '300'
              }}>Sites</p>
              <IconButton sx={{alignSelf: 'center', backgroundColor: '#0f72bd'}} onClick={() => setShowSitePicker(!showSitePicker)}>
                <CloseIcon sx={{color: '#fff', height: '12px', width: '12px'}}/>
              </IconButton>
            </div>
            <div style={{
              overflow: 'auto',
              padding: '20px',
              height: 'calc(100% - 65px)'
            }}>
              <AdminButton>Administration<ChevronRight/></AdminButton>
              <TextField
                sx={{width: '100%', backgroundColor: '#fff', borderRadius: '5px', marginBottom: '10px'}}
                placeholder='Search...'
                InputProps={{
                  startAdornment: (
                    <SearchIcon sx={{color: '#9cb1cd', marginRight: '20px'}}/>
                  ),
                }}
              />
              <ListButton>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                  <p className='title' style={{color: '#fff', fontSize: '1rem', lineHeight: '18px', fontWeight: '400'}}>DEV TEST SITE</p>
                  <p className='sub_title site_hover' style={{fontSize: '1rem', lineHeight: '22px', fontWeight: '400'}}>TOP CONSTRUCTION</p>
                </div>
                <ChevronRight/>
              </ListButton>
              <ListButton>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                  <p className='title' style={{color: '#fff', fontSize: '1rem', lineHeight: '18px', fontWeight: '400'}}>Bellview Hotel</p>
                  <p className='sub_title site_hover' style={{fontSize: '1rem', lineHeight: '22px', fontWeight: '400'}}>Prime Constructions</p>
                </div>
                <ChevronRight/>
              </ListButton>
              <ListButton>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                  <p className='title' style={{color: '#fff', fontSize: '1rem', lineHeight: '18px', fontWeight: '400'}}>Victoria Cross ISD Demo</p>
                  <p className='sub_title site_hover' style={{fontSize: '1rem', lineHeight: '22px', fontWeight: '400'}}>Mirvac</p>
                </div>
                <ChevronRight/>
              </ListButton>
            </div>
          </div>
        :
          null
      }
      {home_main}
    </div>
  );
}

export default Home;
