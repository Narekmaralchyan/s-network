import React, {FC} from 'react';

import {Container, TextField, Typography} from '@mui/material';

const Registration: FC = () => {
    return (
        <div className="registration-box">
            <Container maxWidth="sm">
                <form>
                    <Typography variant="h2" gutterBottom>
                        Registration
                    </Typography>

                    <div className="inps">
                        <TextField id="standard-basic" label="Name" variant="standard" />
                        <TextField id="standard-basic" label="Last name" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                        <TextField id="standard-basic" label="Email" variant="standard" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Registration;