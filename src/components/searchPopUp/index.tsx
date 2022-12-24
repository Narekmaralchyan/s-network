import React , { ChangeEvent , FC , useEffect , useState } from 'react';
import { Avatar , Button , Card , Input } from '@mui/material';
import './style.css';
import { useAppSelector } from '../../app/hooks';
import { UserAPI } from '../../API';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { ISearchResult } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
interface IProps{
    handleShowSearchPopUp:()=>void
}
const SearchPopUp:FC<IProps> = ({handleShowSearchPopUp})=>{
    const [inputValue,setInputValue] = useState('');
    const {data} = useAppSelector(state => state.currentUser);
    const navigate = useNavigate();

    function goToProfile(id:string){
        navigate(`/profile/${id}`);
        handleShowSearchPopUp();
    }
    
    const [searchResult,setSearchResult] = useState<ISearchResult[]>([]);
    const currentUserAPI = new UserAPI(data || '');
    
    
    useEffect(()=>{
       if(inputValue.length>1){
           const timeoutId:TimeoutId  = setTimeout(()=>{
               currentUserAPI.searchUsers(inputValue)
                   .then(res=>{
                       setSearchResult(res);
                   });

           },300);
           return ()=>{clearTimeout(timeoutId);};
       }
       else setSearchResult([]);

    },[inputValue]);
    function handleChange(e:ChangeEvent<HTMLInputElement>){
       setInputValue(e.target.value);
    }
    function closePopUp(){
        handleShowSearchPopUp();
    }


    return (
        <div id="SerchPopUp_background">
            <Card sx={{width:'30%',height:'500px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Input type="text" value={inputValue} onChange={handleChange} placeholder="search" sx={{width:'30%'}}/>
                    <div className="searchItems">
                        {searchResult.map(user=>{
                            return (
                                <div className="resultItem" onClick={()=>{goToProfile(user.id);}} key={user.id}>
                                    <Avatar src={user.avatarURL} />
                                    <span>{user.name} {user.lastName}</span>
                                </div>
                            );
                        })}
                    </div>
                    <Button onClick={closePopUp}>Cancel</Button>
            </Card>
        </div>
        );
};
export default SearchPopUp;