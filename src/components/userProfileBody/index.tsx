import React , { FC } from 'react';
import useLivePosts from '../../customHooks/useLivePosts';

interface IProps{
    profileUserId:string;
}


const UserProfileBody:FC<IProps> = ({profileUserId}) => {
    const posts = useLivePosts(profileUserId);

    if(posts){
        return (<div style={{display:'flex',flexWrap:'wrap'}}>
            {
                posts.map(post=>{
                    return <img style={{height:'200px',objectFit:'contain'}} src={post.imageURL} key={post.id} alt={post.description} />;
                })
            }
        </div>);
    }
    else {
        return(
            <div>
                No posts
            </div>
        );
    }
};
export default UserProfileBody;