import React from 'react';
import {getAuth} from '@firebase/auth';
import AuthRoutes from '../../Routes/authRoutes';

const AuthenticatedApp = () => {
    function exit (){
        const auth = getAuth();
        auth.signOut();
    }
    return (
        <div>
            <button onClick={exit}>exit</button>
           <AuthRoutes />
        </div>
    );
};

export default AuthenticatedApp;