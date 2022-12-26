import React , {  useEffect , useState } from 'react';
import { IPost , IPostRequestParams } from 'interfaces';
import { useAppSelector } from 'app/hooks';
import { UserAPI } from 'API';
import FeedPostItem from '../feedPostItem';
import './style.css';



interface IData {
    total:number,
    posts:IPost[]
}

const PostsList = () => {
    const [loading,setLoading] = useState(true);
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
                setLoading(true);
                const currentUserAPI = new UserAPI(currentUserId);
                currentUserAPI.getFollowPosts(params)
                    .then(res=>{
                        setData(prevState => ({
                            total:res.total,
                            posts:[...prevState.posts,...res.posts]
                        }));
                    }).then(()=>{
                        setLoading(false);
                });

        }
    },[params,currentUserId]);

    //@ts-ignore
    function loadMore(e){
       const loadIsValid = e.target.scrollTop > e.target.scrollHeight * 0.5;
        if(!loading && loadIsValid && data.posts.length<data.total && data.total>-1 ){
                setParams({
                    start:params.start+params.limit,
                    limit:params.limit,
                });
        }
    }

    return (
        <div onScroll={loadMore} className="feedPostsList">

            {
                data.posts.length?
                    data.posts.map(post=>{
                    return <FeedPostItem key={post.id} post={post}/>;
                    })
                :
                    <h3>NO POSTS</h3>
                 }
            {loading && 'loading...'}
        </div>
    );
};

export default PostsList;