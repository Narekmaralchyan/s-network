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


const TemporaryDrawer: FC = () => {
    const icons = [
        <HomeIcon sx={{fontSize: '40px', marginRight: '20px'}} key={1}/>,
        <AccountBoxOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={1}/>,
        <MessageOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={2}/>,
        <PersonSearchOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={3}/>,
        <SettingsOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={4}/>,
        <LogoutOutlinedIcon sx={{fontSize: '40px', marginRight: '20px'}} key={5}/>,
    ];

    return (
        <div className="left_menu">
                <Box sx={leftMenu.boxStyle}>
                    <Divider />
                    <List sx={{fontSize: '40px'}}>
                        {['Home','Profile', 'Messages', 'Search', 'Settings', 'Log out'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{marginBottom: '15px'}}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {icons[index]}
                                    </ListItemIcon>

                                    <ListItemText primary={text} primaryTypographyProps={{fontSize: '1.3rem'}} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
        </div>
    );
};

export default TemporaryDrawer;