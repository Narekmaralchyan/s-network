import React, {useEffect, useState} from 'react';
import {onValue, ref} from 'firebase/database';
import {db} from '../../firebase_configs/firebaseConfig';

interface IComment{
    commentId:string;
    time:number;
    authorId:string;
    message:string;
}

interface IPost{
    authorId:string;
    description:string;
    id:string;
    imageURL:string;
    postTime:number;
    likes?:string[];
    comments?:IComment[];

}

const useLivePosts = (id:string)=>{
    const [state,setState] = useState<IPost[]|null>(null);
    const Ref = ref(db,`${id}/posts`);
    useEffect(()=>{

            return  onValue(Ref,(snapshot=>{
                if(snapshot.val())
                {
                    const posts = Object.values(snapshot.val()) as IPost[];
                    setState(posts.sort((a,b)=>b.postTime-a.postTime));
                }
            }));
        }
        ,[]);

    return state;
};

export default useLivePosts;