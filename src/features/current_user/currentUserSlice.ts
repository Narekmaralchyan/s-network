import { createSlice } from '@reduxjs/toolkit';

interface IState<T>{
    status:'idle' | 'loading' | 'failed',
    data:T | null
}



const initialState:IState<number> = {
    status: 'idle',
    data: null
};

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {

    }
});

export default currentUserSlice.reducer;