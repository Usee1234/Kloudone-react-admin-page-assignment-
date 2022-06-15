import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#" >

              <ListItemIcon>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="/books.png"
                // onClick={(e) => setOpen(true)}
                />
                <Box sx={{ fontWeight: 'bold', paddingLeft: '30px', color: 'black', fontVariant: 'common-ligatures' }}>Settings</Box>


              </ListItemIcon>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#org">
              <ListItemIcon>
              <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="/folder.png"
                // onClick={(e) => setOpen(true)}
                />
                
              </ListItemIcon>
              <ListItemText primary="Organisation" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#certifiacte">
              <ListItemIcon>
              <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="/open.png"
                // onClick={(e) => setOpen(true)}
                />
              </ListItemIcon>
              <ListItemText primary="Certificates" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Badges">
              <ListItemIcon>
              <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="badges/.png"
                // onClick={(e) => setOpen(true)}
                />
              </ListItemIcon>
              <ListItemText primary="Badges" />
        
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Permission-access">
              <ListItemIcon>
               <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="/task.png"
                // onClick={(e) => setOpen(true)}
                /> 
              </ListItemIcon>
              <ListItemText primary="Permission-Access" />
            </ListItemButton>
          </ListItem>
          {/* <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="/task.png"
                // onClick={(e) => setOpen(true)}
                /> */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#/Integration">
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Integration" />
            </ListItemButton>
          </ListItem>
          
          {/* </ListItem><ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton> */}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
