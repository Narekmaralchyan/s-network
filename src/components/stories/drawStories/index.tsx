import React, {FC, useEffect, useState} from 'react';

import {IReactStory, IUser} from 'interfaces';

import { v4 as uuid } from 'uuid';

import {UserAPI} from 'API';

import StoriesPopUp from '../storiesPopUp';

import {Stack} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useAppSelector} from 'app/hooks';
import Typography from '@mui/material/Typography';

import storiesStyle from './storiesCss';
import SimpleBackdrop from '../../loading';
import {IStory} from '../../../interfaces';

const DrawStories: FC = () => {
    const { data } = useAppSelector(state => state.currentUser);
    const currentUser = new UserAPI(data || '');
    const [userStories, setUserStories] = useState<null | {name: string, avatarUrl: string}>(null);

    const [followsUsers, setFollowsUsers] = useState<IUser[]>([]);
    const [followsUserStories, setFollowsUserStories] = useState({
        followsStory: [] as IStory[],
        showPopUp: false
    });

    const followsUsersData = async (ids: string[]) => {
        const data: IUser[] = [];

        for(const item of ids) {
            const followsUserData = await currentUser.getFollowsUsersData(item);

            if(followsUserData.stories) {
                data.push(followsUserData);
            }
        }

        return data;
    };

    useEffect(() => {
        currentUser.getAvatarName().then(res => {
            setUserStories(prevState => {
                return {
                    ...prevState,
                    name: res.name,
                    avatarUrl: res.avatarUrl
                };
            });
        });

        currentUser.getFollows().then(res => {
            return res;
        }).then(res => {
            followsUsersData(res).then(res => {
                setFollowsUsers(prevState => [...prevState, ...res]);
            });
        });
    }, []);

    const getStories = (id: string) => {
        currentUser.getStories(id).then(res => {
            setFollowsUserStories((prevState) => {
                const result: IStory[] = [];

                Object.values<IStory>(res).forEach(item => {
                    result.push(item);
                });

                return {
                    followsStory: [...prevState.followsStory, ...result],
                    showPopUp: true
                };
            });
        });
    };

    return (
        <Box mt={5} sx={storiesStyle.storiesBox}>
            {followsUserStories.showPopUp && <StoriesPopUp followsStory={followsUserStories.followsStory}/>}
            <Grid sx={{cursor: 'pointer'}}>
                <Stack direction="row" spacing={5}>
                    <Box>
                        <div style={{display: 'flex', alignItems: 'center', marginRight: '20px'}} >
                            <Avatar sx={storiesStyle.avatar} alt="user avatar" src={userStories?.avatarUrl} />
                            <Typography mt={1} fontSize={15}>{userStories?.name}</Typography>

                            {followsUsers.map(user => {
                                return (
                                    <div key={uuid()} style={{marginRight: '20px'}}>
                                        <Avatar onClick={() => {
                                            getStories(user.id);
                                        }} sx={storiesStyle.avatar} alt="user avatar" src={user?.avatarURL} />
                                        <Typography mt={1} fontSize={15}>{user.name}</Typography>
                                    </div>
                                );
                            })}
                        </div>
                    </Box>
                </Stack>
            </Grid>
        </Box>
    );
};

export default DrawStories;