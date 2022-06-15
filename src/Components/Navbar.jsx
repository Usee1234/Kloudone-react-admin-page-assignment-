import { Mail, MenuBook } from "@mui/icons-material";
import  SearchIcon  from "@mui/icons-material/Search"
// import   Typography from "@mui/system";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,

  TextField,

  Toolbar,
  Typography,
} from "@mui/material";
// import { borderRight } from "@mui/system";
// import message from "./Images/message.png";
import React, { useState } from "react";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  color: "black",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  // padding: "10px,100px",
  borderRadius: theme.shape.borderRadius,
  border:"2px solid black",
  width: "40%",
  display: "flex",
  margintop: "0px",
  justifyContent: "space-between"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (

    <AppBar position="sticky" >
      <StyledToolbar >
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block", Color: "black" } }}>
          <Avatar
            sx={{ width: 300, height: 100 }}
            src="/fulllogo.png "

          // onClick={(e) => setOpen(true)} */}
          />
        </Typography>

        <MenuBook sx={{ display: { xs: "block", sm: "none", } }}
        />
        <Search>

          < InputBase placeholder=" Search assets,Courses" sx={{ width: '500px', border: '2px solid white'}} />
          {/* <a href="google.com"> */}
            <IconButton>
              <SearchIcon />
            </IconButton>
            {/* <Avatar
            sx={{ width: 30, height: 30 ,padding:"5px"}}
            src="/search.png"
            
          
            
            // onClick={(e) => <a href="httpsllol.com">kl</a>}
          /> */}
          {/* </a> */}
          
          {/* <InputBase placeholder="search assets,courses" /> */}
        </Search>
        
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          
          
          {/* <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge> */}
          <a href="https google.com">
          <Avatar

            sx={{ width: 30, height: 30 }}
            src="/speaker.png"

          // onClick={(e) => setOpen(true)}
          />

          </a>
          <a href="##">
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/notification.png"
          // onClick={(e) => setOpen(true)}
          />
         </a>
         <a href="##">
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/setting.png"
          // onClick={(e) => setOpen(true)}
          />
          </a>
          <Typography variant="h5" >Vibhu</Typography>
          <Avatar
          
            sx={{ width: 30, height: 30 }}

            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
          {/* <Typography variant="span">John</Typography> */}
          {/* <Avatar
            sx={{ width: 30, height: 30 }}
            src="./Images/message.png"
            onClick={(e) => setOpen(true)}
          /> */}
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Vibhu Mathur</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar >

  );
};

export default Navbar;