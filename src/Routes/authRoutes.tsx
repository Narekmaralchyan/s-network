import React, {FC} from 'react';

import { Routes, Route } from 'react-router-dom';

import Settings from 'pages/settings';
import UserProfile from 'pages/userProfile';
import Registration from 'pages/registration';
import Feed from '../pages/feed';

const AuthRoutes: FC = () => {
    return (
        <Routes>
            <Route path="feed" element={<Feed/>} />
            <Route path="registration" element={<Registration />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/:id" element={<UserProfile />} />
        </Routes>
    );
};

export default AuthRoutes;