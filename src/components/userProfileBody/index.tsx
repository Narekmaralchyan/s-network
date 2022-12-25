import React , { FC , useEffect , useState } from 'react';
import './style.css';
import { UserAPI } from '../../API';
import { IPost } from '../../interfaces';
import { Skeleton } from '@mui/material';

interface IProps{
    profileUserId:string;

}


const UserProfileBody:FC<IProps> = ({profileUserId}) => {
    const [pageLoading,setPageLoading] = useState(true);


    const [posts,setPosts] = useState<IPost[] | null>(null);

    useEffect(()=>{
        setPageLoading(true);
        const profileUserAPI = new UserAPI(profileUserId);
        profileUserAPI.getPosts()
            .then(posts=>{
                setPosts(Object.values(posts));
                stopPageLoading();
            })
            .catch(err=>{
                stopPageLoading();
            setPosts([]);
        });
    },[profileUserId]);

    function stopPageLoading(){
        setPageLoading(false);
    }

   if(pageLoading){
       return (<div className="pageLoading">
           <Skeleton variant="rectangular" width={'30%'} height={250} />
           <Skeleton variant="rectangular" width={'30%'} height={250} />
           <Skeleton variant="rectangular" width={'30%'} height={250} />
           <Skeleton variant="rectangular" width={'30%'} height={250} />
           <Skeleton variant="rectangular" width={'30%'} height={250} />
           <Skeleton variant="rectangular" width={'30%'} height={250} />
       </div>);
   }
   else if(posts?.length){
        return (<div className="postList">
            {
                posts.map(post=>{
                    return( <div key={post.id} className="postItem">
                        <img  src={post.imageURL}  alt={post.description} />
                    </div>);
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