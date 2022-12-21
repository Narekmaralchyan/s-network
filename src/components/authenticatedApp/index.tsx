import React from 'react';
import {getAuth} from '@firebase/auth';

const AuthenticatedApp = () => {
    function exit (){
        const auth = getAuth();
        auth.signOut();
    }
    return (
        <div>
            <button onClick={exit}>exit</button>
            <h1>AuthenticatedApp</h1>
        </div>
    );
};

export default AuthenticatedApp;