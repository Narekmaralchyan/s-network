import React, {FC} from 'react';

import {IStory} from 'interfaces';

interface IStoriesPopUpProps {
    followsStory: IStory[];
}

const StoriesPopUp: FC <IStoriesPopUpProps> = ({ followsStory }) => {
    console.log(followsStory);

    return(
        <></>
    );
};

export default StoriesPopUp;
