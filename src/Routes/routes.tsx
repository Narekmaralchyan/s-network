import React, {FC} from 'react';

import { Routes, Route } from 'react-router-dom';

import Settings from 'pages/settings';
import UserProfile from 'pages/userProfile';
import Registration from 'pages/registration';
import Feed from 'pages/feed';
import SignIn from 'pages/signIn';

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/registration"  element={<Registration />} />
            <Route path="feed" element={<Feed/>} />
            <Route path="settings" element={<Settings />} />
            <Route path="/:id" element={<UserProfile />} />
        </Routes>
    );
};

export default AppRoutes;