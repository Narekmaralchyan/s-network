import React from 'react';

import {Routes,Route} from 'react-router-dom';

import Registration from '../pages/registration';
import SignIn from '../pages/signIn';

const UnAuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/registration"  element={<Registration />} />
        </Routes>
    );
};

export default UnAuthRoutes;