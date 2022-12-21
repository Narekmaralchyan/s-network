import React, {FC} from 'react';

import { Routes, Route } from 'react-router-dom';

import Registration from 'pages/registration';
import {Feed} from '@mui/icons-material';

const AuthRoutes: FC = () => {
    return (
        <Routes>
            <Route path="feed" element={<Feed />} />
            <Route path="registration" element={<Registration />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/:id" element={<UserProfile />} />
        </Routes>
    );
};

export default AuthRoutes;