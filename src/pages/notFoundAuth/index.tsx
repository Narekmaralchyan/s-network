import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
const NotFoundAuthRouts: FC = () => {

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: 3,
                        borderColor: '#607d8b',
                        paddingLeft: 2,
                        paddingRight: 2,
                        paddingTop: 2,
                        paddingBottom: 2,
                        borderRadius: 7
                    }}
                    >
                <Typography component="h1" variant="h5">
                    Not found this page
                </Typography>
                <Button fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                    <Link to="/feed" >Go to feed</Link>
                </Button>
        </Box>
            </Container>


    </>);
};



export default NotFoundAuthRouts;