import React, {FC, useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import Settings from 'pages/settings';
import UserProfile from 'pages/userProfile';
import Feed from 'pages/feed';
import LeftMenu from 'components/leftMenu';
import RightMenu from 'components/rightMenu';
import AddPostPopUp from '../components/addPostPopUp';
import SearchPopUp from '../components/searchPopUp';

const AuthRoutes: FC = () => {
    const [showAddPostPopUp,setShowAddPostPopUp] = useState(false);
    const [showSearchPopUp,setShowSearchPopUP] = useState(false);
    function handleShowAddPostPopUp(){
        setShowAddPostPopUp(prev=>!prev);
    }
    function handleShowSearchPopUp (){
        setShowSearchPopUP(prev => !prev);
    }
    
    return (
        <>
            <LeftMenu handleShowSearchPopUp={handleShowSearchPopUp} />
            <RightMenu handleShowAddPostPopUp={handleShowAddPostPopUp} />
            {showSearchPopUp && <SearchPopUp handleShowSearchPopUp={handleShowSearchPopUp}/>}
            {showAddPostPopUp && <AddPostPopUp handleShowAddPostPopUp={handleShowAddPostPopUp} />}
            <Routes>
                <Route path="/" element={<Feed/>} />
                <Route path="feed" element={<Feed/>} />
                <Route path="settings" element={<Settings />} />
                <Route path="/profile/:id" element={<UserProfile />} />
                <Route path="*" element={<div>not found</div>} />
            </Routes>
        </>
    );
};

export default AuthRoutes;