import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from './app/hooks';
import AuthenticatedApp from './components/authenticatedApp';
import UnAuthenticatedApp from './components/unAuthenticatedApp';
import {setUserId} from './features/current_user/currentUserSlice';
import {getAuth} from '@firebase/auth';
import Registration from './pages/registration';


const App: FC = () => {
    const {status,data} = useAppSelector(state=>state.currentUser);
    const dispatch = useAppDispatch();

    const auth = getAuth();
    auth.onAuthStateChanged(function(user) {
        user ? dispatch(setUserId(user.uid)) : dispatch(setUserId(null));
    });

    return(
        <>
            { data ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </>
    );
};

export default App;
