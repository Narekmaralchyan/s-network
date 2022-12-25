import React, {ChangeEvent, FC, useState} from 'react';

import { v4 as uuid } from 'uuid';

import SimpleBackdrop from '../../loading';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import {Input} from '@mui/material';
import {useAppSelector} from '../../../app/hooks';
import {UserAPI} from '../../../API';
import {IStory} from '../../../interfaces';

interface ICrateStoriesPopUpProps {
    handleShowStoriesPopUp(): void;
}

const CreateStoriesPopUp: FC <ICrateStoriesPopUpProps> = ({handleShowStoriesPopUp}) => {
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [file, setFile] = useState<null | File>(null);
    const { data } = useAppSelector(state => state.currentUser);
    const currentUser = new UserAPI(data || '');

    const handleInputChnage = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const uploadStories = () => {
        if(file) {
            currentUser.getAvatarName().then(res => {
                setLoading(true);
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function() {
                    const story: IStory = {
                        storyId: uuid(),
                        storyURL: reader.result as string,
                        storyTime: new Date().getTime(),
                        storyAutherURL: res.avatarUrl,
                        storyAuthorName: res.name,
                        storyShowTime: 15000,
                        authorId: data!
                    };

                    currentUser.addStories(story).then(() => {
                        setLoading(false);
                        setShowAlert(true);
                    });
                };
            });
        }
    };

    return (
        <div className="stories_popup">
            {loading && <SimpleBackdrop />}

            {
                showAlert ? <Alert
                    action={
                        <Button onClick={() => {
                            setShowAlert(false);
                            handleShowStoriesPopUp();
                        }} color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
                    :
                    <div className="popUp">
                        <img alt="added_image" src={file ? URL.createObjectURL(file) : 'https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png'} />

                        <div className="manage">
                            <Input inputProps={{ accept: 'image/*' }}   sx={{width:'105px'}} onChange={handleInputChnage} type="file"/>

                            <div className="buttons">
                                <Button onClick={uploadStories} disabled={!file} variant="contained">Add</Button>
                                <Button onClick={handleShowStoriesPopUp} variant="contained">Cancel</Button>
                            </div>
                        </div>
                    </div>
            }
            
        </div>
    );
};

export default CreateStoriesPopUp;