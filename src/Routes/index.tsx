import React, {FC} from 'react';

import { Routes, Route } from 'react-router-dom';

import Registration from 'pages/registration';

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="registration" element={<Registration />} />
        </Routes>
    );
};

export default AppRoutes;