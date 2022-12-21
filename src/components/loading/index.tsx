import * as React from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SimpleBackdrop() {
    return (
        <div>
            <Backdrop
                sx={{ color: 'white', zIndex: 100 }}
                open={true}
            >
                <CircularProgress color="inherit" size="100px"/>
            </Backdrop>
        </div>
    );
}