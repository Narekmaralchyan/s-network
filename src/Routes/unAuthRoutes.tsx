import React, {FC} from 'react';

import { Routes, Route } from 'react-router-dom';

import Registration from 'pages/registration';
import SignIn from 'pages/signIn';

const UnAuthRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/registration"  element={<Registration />} />
            <Route path="*" element={<div>not found</div>} />
        </Routes>
    );
};

export default UnAuthRoutes;