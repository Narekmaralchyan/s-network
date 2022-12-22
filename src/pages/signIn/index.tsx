import  React from 'react';

import {useWindowSize} from 'customHooks/useWindowSize';
import Earth from 'components/earth';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import {useAppDispatch} from '../../app/hooks';
import {setFail, setLoading} from '../../features/current_user/currentUserSlice';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';

const auth = getAuth();


export default function SignIn() {
    const windowSize =useWindowSize();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setLoading());
        const data = new FormData(event.currentTarget);
          signInWithEmailAndPassword(auth, data.get('email') as string , data.get('password') as string)
            .catch(()=>{
                dispatch(setFail());
            });
    };

    return (
        <>
            <Grid container component="main" color="skyblue" overflow="hidden"   sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={3} component={Paper} color="skyblue" elevation={1} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'skyblue' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {'Don\'t have an account? Sign Up'}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                { windowSize > 960 ?  <Grid position="relative" item xs={false} sm={false} md={9} component={Paper} elevation={1} square>
                    <Earth/>
                </Grid> : null}

            </Grid>
        </>
    );
}