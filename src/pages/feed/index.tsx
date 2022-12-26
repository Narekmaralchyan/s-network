import React from 'react';
import PostsList from 'components/postsList';
import { feedStyle } from './style';
import { Card } from '@mui/material';


const Feed = () => {
    return (
        <Card sx={feedStyle}>
            <PostsList />
        </Card>
    );
};

export default Feed;