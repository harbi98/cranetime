import { useState } from 'react';
import '../App.min.css';
import { Box, Drawer, List, ListItem, ListItemButton, Divider, ListItemText, Typography } from '@mui/material';
import Site from './SettingsSite';
import TowerCranes from './SettingsTowerCrane';

function Settings() {
  const drawerWidth = 250;
  const [settings_main, set_settings_main] = useState(<Site/>);
  const settings_display = (settings_dis) => {
    if(settings_dis === "Site") {
      set_settings_main(<Site/>);
    } else if(settings_dis === "Tower Cranes") {
      set_settings_main(<TowerCranes/>);
    } else {
      set_settings_main(null);
    }
  }
  return (
    <Box className="home-main-wrap">
        <Drawer
          PaperProps={{
            sx: {
              position: "absolute",
              marginLeft: '75px',
              backgroundColor: '#252529',
            }
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Divider />
          <Box className="settings-header">
            <Typography className="settings-title" variant="h5">Settings</Typography>
          </Box>
          <Box className="settings-nav-body">
            <List
              sx={{
                marginBottom: '30px',
                '& .MuiListItemButton-root:hover': {
                  '&, & .MuiListItemText-root': {
                    color: '#0f72bd',
                  },
                },
              }}
              disablePadding
            >
              <Typography className="settings-nav-name">System</Typography>
              {['Site', 'Modules'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => settings_display(text)}>
                    <ListItemText primary={text} sx={{color: 'white'}} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List
              sx={{
                marginBottom: '30px',
                '& .MuiListItemButton-root:hover': {
                  '&, & .MuiListItemText-root': {
                    color: '#0f72bd',
                  },
                },
              }}
              disablePadding
            >
              <Typography className="settings-nav-name">People & Co.</Typography>
              {['People', 'Companies'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => settings_display(text)}>
                    <ListItemText primary={text} sx={{color: 'white'}}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List
              sx={{
                marginBottom: '30px',
                '& .MuiListItemButton-root:hover': {
                  '&, & .MuiListItemText-root': {
                    color: '#0f72bd',
                  },
                },
              }}
              disablePadding
            >
              <Typography className="settings-nav-name">Project</Typography>
              {['Task', 'Milestones'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => settings_display(text)}>
                    <ListItemText primary={text} sx={{color: 'white'}}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List
              sx={{
                marginBottom: '30px',
                '& .MuiListItemButton-root:hover': {
                  '&, & .MuiListItemText-root': {
                    color: '#0f72bd',
                  },
                },
              }}
              disablePadding
            >
              <Typography className="settings-nav-name">Assets</Typography>
              {['Tower Cranes', 'Mobile Cranes', 'Hoists', 'Delivery Bays', 'Loading Platforms', 'Material Handling', 'Concrete Pumps'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => settings_display(text)}>
                    <ListItemText primary={text} sx={{color: 'white'}}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        {settings_main}
      </Box>
  );
}

export default Settings;
