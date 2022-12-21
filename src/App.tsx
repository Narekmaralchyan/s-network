import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from './app/hooks';
import AuthenticatedApp from './components/authenticatedApp';
import UnAuthenticatedApp from './components/unAuthenticatedApp';
import {setUserId} from './features/current_user/currentUserSlice';
import {getAuth} from '@firebase/auth';
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from '@mui/material';


const App: FC = () => {
    const {status,data} = useAppSelector(state=>state.currentUser);
    const dispatch = useAppDispatch();

    const auth = getAuth();
    auth.onAuthStateChanged(function(user) {
        user ? dispatch(setUserId(user.uid)) : dispatch(setUserId(null));
    });
    const theme = createTheme({
        palette: {
            mode:'dark'
        }
    });

    return(
        <ThemeProvider theme={theme}>
            { data ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </ThemeProvider>
    );
};

export default App;
