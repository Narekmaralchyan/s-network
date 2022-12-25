import React from 'react';

import PostsList from 'components/postsList';
import DrawStories from 'components/stories/drawStories';

import Box from '@mui/material/Box';

import feedStyle from './feedCss';

const Feed = () => {
    return (
        <Box sx={feedStyle.feedDisplay}>
            <DrawStories />
            <PostsList />
        </Box>
    );
};

export default Feed;