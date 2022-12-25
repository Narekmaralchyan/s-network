import React from 'react';
import { useLocation , useParams } from 'react-router-dom';

import {UserAPI} from 'API';
import { Card } from '@mui/material';
import style from './style';
import {useAppSelector} from '../../app/hooks';
import UserProfileHeader from '../../components/userProfileHeader';
import UserProfileBody from '../../components/userProfileBody';


const UserProfile = () => {
    const profileUserId = useLocation().pathname.split('/')[2];
    const {data} = useAppSelector(state => state.currentUser);

    const currentUserAPI = new UserAPI(data || '');
    const isOwner = data === profileUserId;

        return (
            <Card  sx={style.box}>
                <UserProfileHeader profileUserId={profileUserId} isOwner={isOwner} currentUserAPI={currentUserAPI}/>
                <UserProfileBody profileUserId={profileUserId} />
            </Card>
        );
};

export default UserProfile;