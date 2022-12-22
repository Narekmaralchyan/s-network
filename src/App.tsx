import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {logOut, setUserId} from './features/current_user/currentUserSlice';
import {getAuth} from '@firebase/auth';
import {createTheme} from '@mui/material/styles';
import {Alert, ThemeProvider} from '@mui/material';
import SimpleBackdrop from './components/loading';
import AppRoutes from './Routes/routes';

const auth = getAuth();
const App: FC = () => {
    const {status,data} = useAppSelector(state=>state.currentUser);
    const dispatch = useAppDispatch();


    auth.onAuthStateChanged(function(user) {

         if(status != 'loading'){
               user ? dispatch(setUserId(user.uid)):dispatch(logOut());
        }

    });
    const theme = createTheme({
        palette: {
            mode:'dark'
        }
    });

    return(
        <ThemeProvider theme={theme}>
            { status == 'loading'? <SimpleBackdrop />: status=='fail'?<Alert severity="error">Incorrect Email or Password,Try Again!!!</Alert>:null }
            <AppRoutes />
        </ThemeProvider>
    );
};

export default App;