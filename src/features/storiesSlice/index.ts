import { createSlice } from '@reduxjs/toolkit';

import { IStories } from 'interfaces';

const initialState: IStories<string> = {
    status: 'idle',
    data: null
};

const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {

    }
});

export default storiesSlice.reducer;