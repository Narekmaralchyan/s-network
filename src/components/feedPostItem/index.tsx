import React , { FC , useEffect , useState } from 'react';
import { IPost } from '../../interfaces';
import { Avatar , Card , Skeleton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import './styel.css';
import { UserAPI } from '../../API';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

interface IProps{
    post:IPost
}
interface IState {
    name:string,
    lastName:string,
    avatarUrl:string,
    likes:string[],

}

const FeedPostItem:FC<IProps> = ({post})=>{
    const {data} = useAppSelector(state=>state.currentUser);
    const [state,setState] = useState<IState | null>(null);
    const authorAPI = new UserAPI(post.authorId);
    const navigate = useNavigate();

    useEffect(()=>{
      if(data){
          authorAPI.getAllPrimitiveData()
              .then(res=>{
                  setState({
                      name:res.name,
                      lastName:res.lastName,
                      avatarUrl:res.avatarUrl,
                      likes:post.likes || [],
                  });
              });
      }
    },[data]);

    async function likePost(){
      if(data){
          if(state){
              setState({
                  ...state,
                  likes:state.likes.includes(data)?state.likes.filter(id=>id!==data):[...state.likes,data]
              });
          }
          const currentUserAPI =new UserAPI(data);
          await currentUserAPI.likePost(post.authorId,post.id);
      }
    }

    function navigateToAuthor(){
      navigate(`/profile/${post.authorId}`);
    }

    return (

        <div className="feedPost">
                <div className="postHeader">
                    {state? <Avatar onClick={navigateToAuthor} className="avatar"  src={state?.avatarUrl}/>:<Skeleton variant="circular" width={40} height={40}/>}
                    {state?<span onClick={navigateToAuthor} className="authorName">{state.name} {state.lastName}</span>:<Skeleton width={200} height={40}/>}
                </div>
                <div className="mainContent">
                    {state?<img className="postImage" src={post.imageURL} alt={post.description}/>:<Skeleton className="postImage" variant="rectangular" width="100%" height="200px" />}
                </div>

                    {state?
                        <div className="postFooter">
                        <div className="manage">
                            <div className="manageButtons">
                                {state && <FavoriteIcon className={'btn'} onClick={likePost} sx={{color:state.likes.includes(data || '')?'red' : 'white'}} fontSize={'large'} />}
                                <CommentIcon className={'btn'} fontSize={'large'} />
                            </div>
                            <div>
                                {state &&  <span>{state.likes?.length || 0} likes</span>}
                            </div>
                        </div>
                        <div className="postDescription">
                            {post.description}
                        </div>
                        </div>
                        :
                        <Skeleton width={'100%'} height={120}/>}
                </div>
    );

};

export default FeedPostItem;