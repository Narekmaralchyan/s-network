import React, {useEffect, useState} from 'react';
import {onValue, ref} from 'firebase/database';
import {db} from '../../firebase_configs/firebaseConfig';

interface ILiveInfo{
    name:string;
    lastName:string;
    followers:string[] | null;
    follows:string[] | null;
    email:string;
    avatarUrl: string,
}

const useLiveInfo = (id:string)=>{
    const [state,setState] = useState<ILiveInfo | null>(null);
    const Ref = ref(db,`${id}`);
    useEffect(()=>{

        return  onValue(Ref,(snapshot=>{
                const obj ={
                    name:snapshot.val().name,
                    lastName:snapshot.val().lastName,
                    followers:snapshot.val().followers,
                    follows:snapshot.val().follows,
                    email:snapshot.val().email,
                    avatarUrl:snapshot.val().avatarUrl || '',
                };
                setState(obj);
            }));
        }
    ,[]);

    return state;
};

export default useLiveInfo;