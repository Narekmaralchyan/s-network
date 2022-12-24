import React, {FC} from 'react';
import {useAppSelector} from '../../app/hooks';
import useLiveInfo from '../../customHooks/useLiveData';
import {UserAPI} from '../../API';
import {Avatar, Button, Card, CardHeader, Skeleton} from '@mui/material';
import style from './style';

interface IProps {
    profileUserId:string;
    isOwner:boolean;
    currentUserAPI: InstanceType<typeof UserAPI>
}
const UserProfileHeader:FC<IProps> = ({profileUserId,isOwner,currentUserAPI})=>{
    const {data} = useAppSelector(state => state.currentUser);

    const profileUserLiveInfo = useLiveInfo(profileUserId);


    async function handleFollow() {
        await currentUserAPI.followUser(profileUserId);
    }
    const followBtnText = profileUserLiveInfo?.followers?.includes(data || '')?'Unfollow':'follow';

    if(profileUserLiveInfo){
        return ( <div>
                <Card sx={style.profileHeader} >
                    <Avatar sx={{height:'130px',width:'130px'}} src={profileUserLiveInfo.avatarUrl} />
                    <Card sx={style.info}>
                        <Card sx={style.names}>
                            <CardHeader  title={profileUserLiveInfo.name}  />
                            <CardHeader title={profileUserLiveInfo.lastName}  />
                        </Card>
                        <Card sx={style.follows}>
                            <CardHeader title={profileUserLiveInfo.follows?profileUserLiveInfo.follows.length + 'follows':'0 follows' }  />
                            <CardHeader title={profileUserLiveInfo.followers?profileUserLiveInfo.followers.length + 'followers':'0 followers' }  />
                        </Card>
                    </Card >
                    <Card sx={style.buttons}>
                        {
                            isOwner?
                                <Button variant="contained" sx={style.button}>EDIT PROFILE</Button>
                                :
                                <Button onClick={handleFollow} variant="contained" sx={style.button}>{followBtnText}</Button>
                        }
                    </Card>
                </Card>
            </div>
        );
    }
    else return (
        <div>
            <Card sx={style.profileHeader} >
                <Avatar sx={{height:'130px',width:'130px'}}  />
                <Card sx={style.info}>
                    <Card sx={style.names}>
                        <Skeleton variant="text"  width={100} height={64} />
                        <Skeleton variant="text" width={100} height={64} />
                    </Card>
                    <Card sx={style.follows}>
                        <Skeleton variant="text"  width={100} height={64} />
                        <Skeleton variant="text" width={100} height={64} />
                    </Card>
                </Card >
                <Card sx={style.buttons}>
                    <Skeleton variant="text" width={100} height={64} />
                </Card>
            </Card>
        </div>
    );
};
export default UserProfileHeader;