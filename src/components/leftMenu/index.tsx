import React, {FC} from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HomeIcon from '@mui/icons-material/Home';

import leftMenu from './leftMenuCss';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';


const TemporaryDrawer: FC = () => {
    const navigate = useNavigate();
    const {data} = useAppSelector(state=>state.currentUser);
    
   function goHome(){
       navigate('/');
   }
   function goProfile(){
       navigate(`/profile/${data}`);
   }

    return (
        <div className="left_menu" style={}>
                <Box sx={leftMenu.boxStyle}>
                    <Divider />
                    <List sx={{fontSize: '40px'}}>
                        <ListItem disablePadding sx={{marginBottom: '15px'}}>
                            <ListItemButton onClick={goHome}>
                                <HomeIcon  sx={{fontSize: '40px', marginRight: '20px'}} key={1}/>
                                <ListItemText primary="Home" primaryTypographyProps={{fontSize: '1.3rem'}} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{marginBottom: '15px'}}>
                            <ListItemButton onClick={goProfile}>
                                <AccountBoxOutlinedIcon  sx={{fontSize: '40px', marginRight: '20px'}} key={1}/>
                                <ListItemText primary="Profile" primaryTypographyProps={{fontSize: '1.3rem'}} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{marginBottom: '15px'}}>
                            <ListItemButton>
                                <MessageOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={2}/>
                                <ListItemText primary="Messages" primaryTypographyProps={{fontSize: '1.3rem'}} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{marginBottom: '15px'}}>
                            <ListItemButton>
                                <PersonSearchOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={3}/>
                                <ListItemText primary="Search" primaryTypographyProps={{fontSize: '1.3rem'}} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{marginBottom: '15px'}}>
                            <ListItemButton>
                                <SettingsOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={4}/>
                                <ListItemText primary="Settings" primaryTypographyProps={{fontSize: '1.3rem'}} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{marginBottom: '15px'}}>
                            <ListItemButton>
                                <LogoutOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={5}/>
                                <ListItemText primary="Log Out" primaryTypographyProps={{fontSize: '1.3rem'}} />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Box>
        </div>
    );
};


export default TemporaryDrawer;