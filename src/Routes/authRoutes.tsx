import React, {FC} from 'react';

import { Routes, Route } from 'react-router-dom';

import Settings from 'pages/settings';
import UserProfile from 'pages/userProfile';
import Feed from 'pages/feed';

const AuthRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path="feed" element={<Feed/>} />
            <Route path="settings" element={<Settings />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="*" element={<div>not found</div>} />
        </Routes>
    );
};

export default AuthRoutes;