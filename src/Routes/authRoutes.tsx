import React, {FC, useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import Settings from 'pages/settings';
import UserProfile from 'pages/userProfile';
import Feed from 'pages/feed';
import LeftMenu from 'components/leftMenu';
import RightMenu from 'components/rightMenu';
import AddPostPopUp from '../components/addPostPopUp';
import CreateStoriesPopUp from '../components/stories/createStoriesPopUp';

const AuthRoutes: FC = () => {
    const [showAddPostPopUp,setShowAddPostPopUp] = useState(false);
    const [showStoriesPopUp, setShowStoriesPopUp] = useState(false);

    function handleShowAddPostPopUp(){
        setShowAddPostPopUp(prev=>!prev);
    }

    function handleShowStoriesPopUp() {
        setShowStoriesPopUp(prevState => !prevState);
    }
    
    return (
        <>
            <LeftMenu />
            <RightMenu handleShowAddPostPopUp={handleShowAddPostPopUp} handleShowStoriesPopUp={handleShowStoriesPopUp}/>
            {showAddPostPopUp && <AddPostPopUp handleShowAddPostPopUp={handleShowAddPostPopUp} />}
            {showStoriesPopUp && <CreateStoriesPopUp handleShowStoriesPopUp={handleShowStoriesPopUp}/>}
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