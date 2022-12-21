import React, {FC, FormEvent} from 'react';

import {useAppDispatch, useAppSelector} from 'app/hooks';
import { setLoading, setFail, setUserId } from '../../features/current_user/currentUserSlice';

import { setUser } from 'utils/setUser';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SimpleBackdrop from 'componenets/loading';


const theme = createTheme({
    palette: {
        mode: 'dark'
    }
});

const SignUp: FC = () => {
    const status = useAppSelector(state => state.currentUser.status);
    const dispatch = useAppDispatch();

    const submitRegistration = (event: FormEvent<HTMLFormElement>) => {
        dispatch(setLoading());
        setUser(event).then(userId => {
            dispatch(setUserId(userId));
        }).catch(() => {
            dispatch(setFail());
        });
    };

    return (
        <ThemeProvider theme={theme}>
            {status === 'loading' && <SimpleBackdrop />}
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
                    <Avatar sx={{ m: 1, bgcolor: '#607d8b', width: 50, height: 50 }}>
                        <VpnKeyOutlinedIcon fontSize="large" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box onSubmit={submitRegistration} component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default SignUp;