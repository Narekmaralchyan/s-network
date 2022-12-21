import { createSlice } from '@reduxjs/toolkit';

import { IState } from 'interfaces';

const initialState:IState<string> = {
    status: 'idle',
    data: null
};

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.status = 'idle';
            state.data = action.payload;
        },

        setLoading: (state) => {
            state.status = 'loading';
        },

        setFail: (state) => {
            state.status = 'fail';
        }
    }
});

export const { setUserId, setLoading, setFail } = currentUserSlice.actions;

export default currentUserSlice.reducer;