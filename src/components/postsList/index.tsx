import React , { useEffect , useState } from 'react';
import { IPost , IPostRequestParams } from '../../interfaces';
import { useAppSelector } from '../../app/hooks';
import { UserAPI } from '../../API';

interface IData {
    total:number,
    posts:IPost[]
}

const PostsList = () => {
    // const [loading,setLoading] = useState(false);
    const [data,setData] = useState<IData>({
        total:0,
        posts:[],
    });
    const {data :currentUserId} = useAppSelector(state => state.currentUser);
    const [params,setParams] = useState<IPostRequestParams>({
        start:0,
        limit:5,
    });

    useEffect(()=>{
        if(currentUserId){
            if(data.total>-1 || data.posts.length<data.total){
                const currentUserAPI = new UserAPI(currentUserId);
                currentUserAPI.getFollowPosts(params)
                    .then(res=>{
                        setData(prevState => ({
                            total:res.total,
                            posts:[...prevState.posts,...res.posts]
                        }));
                    });
            }
        }
    },[params,currentUserId]);
    function loadMore(){
        setParams(prev=>({
            ...prev,
            start:prev.start+prev.limit,
        }));
    }
    return (
        <div>
            <button onClick={loadMore}>LOAD MORE</button>
           {data.posts.map(post=>{
               return <div key={post.id}>{post.description}</div>;
           })}
        </div>
    );
};

export default PostsList;