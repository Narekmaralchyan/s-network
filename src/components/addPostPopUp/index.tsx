import React, {ChangeEvent, FC, useState} from 'react';
import './style.css';
import {Button, Input} from '@mui/material';
import {useAppSelector} from '../../app/hooks';
import {UserAPI} from '../../API';
import SimpleBackdrop from '../loading';
import {Alert} from '@mui/material';

interface IProps {
    handleShowAddPostPopUp:()=>void;
}

const AddPostPopUp:FC<IProps> = ({handleShowAddPostPopUp})=>{
    const [showAlert,setShowAlert] = useState(false);
    const [loading,setLoading] = useState(false);
    const [file,setFile] = useState<null | File>(null );
    const [description,setDescription] = useState('');
    const {data} = useAppSelector(state=>state.currentUser);
    const currentUserAPI = new UserAPI(data || '');

    function handleFileInputChange(e:ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            setFile(e.target.files[0]);
        }
    }
    function handleChangeDescriptionInput(e:ChangeEvent<HTMLInputElement>){
        setDescription(e.target.value);
    }
    function addPost(){
        if(file){
            setLoading(true);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (){
                currentUserAPI.addPost(reader.result as string,description)
                    .then(()=>{
                        setLoading(false);
                        setShowAlert(true);
                    });
            };
        }
    }

    return (
        <>
        <div className="popUp_background">
            {loading && <SimpleBackdrop/>}
            {
                showAlert ?
                    <Alert sx={{zIndex:'100'}}    action={
                        <Button onClick={()=>{setShowAlert(false);handleShowAddPostPopUp();}} color="inherit" size="small">
                            CLOSE
                        </Button>
                    }>
                        Image uploaded successfully!!!
                    </Alert>
            :
            <div className="popUp">
                <img alt="added_image" src={file && URL.createObjectURL(file) || 'https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png'}/>
                <div className="manage">
                    <Input inputProps={{ accept: 'image/*' }}   sx={{width:'105px'}} onChange={handleFileInputChange} type="file"/>
                    <Input value={description} placeholder="add description" type="text" onChange={handleChangeDescriptionInput} />
                   <div className="buttons">
                       <Button onClick={addPost} disabled={!file} variant="contained">Add</Button>
                       <Button variant="contained" onClick={handleShowAddPostPopUp}>Cancel</Button>
                   </div>
                </div>
            </div>
            }
        </div>

        </>
    );
};

export default AddPostPopUp;