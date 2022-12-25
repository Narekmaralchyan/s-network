import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {logOut, setUserId} from './features/currentUserSlice/currentUserSlice';
import {getAuth} from '@firebase/auth';
import {createTheme} from '@mui/material/styles';
import {Alert, ThemeProvider} from '@mui/material';
import SimpleBackdrop from './components/loading';
import AuthRoutes from './Routes/authRoutes';
import UnAuthRoutes from './Routes/unAuthRoutes';
import Pageloading from './components/pageloading';

const theme = createTheme({
    palette: {
        mode:'dark',
        }

});

const auth = getAuth();
const App: FC = () => {
    const {status} = useAppSelector(state=>state.currentUser);
    const dispatch = useAppDispatch();
    const [AppContent,setAppContent] = useState(<Pageloading/>);

        useEffect(()=>{
            auth.onAuthStateChanged(function(user) {
                    if(status != 'loading')
                        if(user) {
                            setAppContent ( <AuthRoutes/>);
                            dispatch(setUserId(user.uid));

                        }
                        else {
                            setAppContent (<UnAuthRoutes/>);
                            dispatch(logOut());
                        }
                }

            );
        },[]);
    return(
        <ThemeProvider theme={theme}>
            { status == 'loading'? <SimpleBackdrop />: status=='fail'?<Alert severity="error">Incorrect Email or Password,Try Again!!!</Alert>:null }
            {AppContent}
        </ThemeProvider>
    );

};

export default App;