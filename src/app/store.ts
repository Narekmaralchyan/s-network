import { configureStore } from '@reduxjs/toolkit';

import currentUserSliceReducer from 'features/current_user/currentUserSlice';

export const store = configureStore({
  reducer: {
      currentUser: currentUserSliceReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;