import React, { useState } from 'react';
import '../App.min.css';
import { Drawer, List, ListItem, ListItemButton, Divider, ListItemText, Typography } from '@mui/material';
import Site from './System/Site';
import TowerCranes from './Assets/TowerCrane';
import MobileCranes from './Assets/MobileCrane';
import DeliveryBays from './Assets/DeliveryBays';
import LoadingPlatforms from './Assets/LoadingPlatforms';
import BuildingHoists from './Assets/BuildingHoist';
import MaterialHandling from './Assets/MaterialHandling';
import ConcretePumps from './Assets/ConcretePumps';
import Task from './Project/Task';

function Settings() {
  const drawerWidth = 250;
  const [settings_main, set_settings_main] = useState(<Site/>);
  const settings_display = (settings_dis) => {
    if(settings_dis === "Site") {
      set_settings_main(<Site/>);
    } else if(settings_dis === "Task") {
      set_settings_main(<Task/>);
    } else if(settings_dis === "Tower Cranes") {
      set_settings_main(<TowerCranes/>);
    } else if(settings_dis === "Mobile Cranes") {
      set_settings_main(<MobileCranes/>);
    } else if(settings_dis === "Delivery Bays") {
      set_settings_main(<DeliveryBays/>);
    } else if(settings_dis === "Loading Platforms") {
      set_settings_main(<LoadingPlatforms/>);
    } else if(settings_dis === "Building Hoists") {
      set_settings_main(<BuildingHoists/>);
    } else if(settings_dis === "Material Handling") {
      set_settings_main(<MaterialHandling/>);
    } else if(settings_dis === "Concrete Pumps") {
      set_settings_main(<ConcretePumps/>);
    } else {
      set_settings_main(null);
    }
  }
  return (
    <div className="home-main-wrap">
        <Drawer
          PaperProps={{
            sx: {
              position: "absolute",
              marginLeft: '70px',
              backgroundColor: '#252529',
            }
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              divSizing: 'border-div',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Divider />
          <div className="settings-header">
            <Typography className="settings-title" variant="h5">Settings</Typography>
          </div>
          <div className="settings-nav-body">
            <List
              sx={{
                marginBottom: '20px',
                '& .MuiListItemButton-root:hover': {
                  '&, & .MuiListItemText-root': {
                    color: '#0f72bd',
                  },
                },
              }}
              disablePadding
            >
              <Typography className="settings-nav-name" sx={{fontWeight: '300', fontSize: 14}}>System</Typography>
              {['Site', 'Modules'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => settings_display(text)} sx={{padding: '5px 0px'}}>
                    <ListItemText primary={text} sx={{color: 'white'}} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List
              sx={{
                marginBottom: '20px',
                '& .MuiListItemButton-root:hover': {
                  '&, & .MuiListItemText-root': {
                    color: '#0f72bd',
                  },
                },
              }}
              disablePadding
            >
              <Typography className="settings-nav-name" sx={{fontWeight: '300', fontSize: 14}}>People & Co.</Typography>
              {['People', 'Companies'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => settings_display(text)} sx={{padding: '5px 0px'}}>
                    <ListItemText primary={text} sx={{color: 'white'}}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List
              sx={{
                marginBottom: '20px',
                '& .MuiListItemButton-root:hover': {
                  '&, & .MuiListItemText-root': {
                    color: '#0f72bd',
                  },
                },
              }}
              disablePadding
            >
              <Typography className="settings-nav-name" sx={{fontWeight: '300', fontSize: 14}}>Project</Typography>
              {['Task', 'Milestones'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => settings_display(text)} sx={{padding: '5px 0px'}}>
                    <ListItemText primary={text} sx={{color: 'white'}}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List
              sx={{
                marginBottom: '20px',
                '& .MuiListItemButton-root:hover': {
                  '&, & .MuiListItemText-root': {
                    color: '#0f72bd',
                  },
                },
              }}
              disablePadding
            >
              <Typography className="settings-nav-name" sx={{fontWeight: '300', fontSize: 14}}>Assets</Typography>
              {['Tower Cranes', 'Mobile Cranes', 'Building Hoists', 'Delivery Bays', 'Loading Platforms', 'Material Handling', 'Concrete Pumps'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => settings_display(text)} sx={{padding: '5px 0px'}}>
                    <ListItemText primary={text} sx={{color: 'white'}}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        {settings_main}
      </div>
  );
}

export default Settings;
