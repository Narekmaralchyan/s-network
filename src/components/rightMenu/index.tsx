import  React,{FC} from 'react';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HistoryIcon from '@mui/icons-material/History';
import PostAddIcon from '@mui/icons-material/PostAdd';

interface IProps {
    handleShowAddPostPopUp:()=>void;
    handleShowStoriesPopUp: () => void;
}

const RightMenu:FC<IProps> = ({handleShowAddPostPopUp, handleShowStoriesPopUp}) =>{
    return (
        <div  style={{position:'fixed',right:30,bottom:30}}>
            <Box sx={{ height: 1, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial ariaLabel="SpeedDial basic example" sx={{  bottom: 30, right: 30 ,}} icon={<SpeedDialIcon />}>
                    <SpeedDialAction onClick={handleShowAddPostPopUp} key="Add Post" icon={<PostAddIcon fontSize="large"   />} tooltipTitle="Add Post"/>
                    <SpeedDialAction onClick={handleShowStoriesPopUp} key="Add Story" icon={<HistoryIcon fontSize="large"  />} tooltipTitle="Add Story"/>
                </SpeedDial>
            </Box>
        </div>
    );
};

export default RightMenu;