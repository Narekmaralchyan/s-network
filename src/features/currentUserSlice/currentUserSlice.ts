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
            state.status = 'success';
            state.data = action.payload;
        },
        logOut:(state)=>{
            state.data=null;
        },

        setLoading: (state) => {
            state.status = 'loading';
        },

        setFail: (state) => {
            state.status = 'fail';
            state.data = null;
        }
    }
});

export const { setUserId, setLoading, setFail,logOut } = currentUserSlice.actions;

export default currentUserSlice.reducer;