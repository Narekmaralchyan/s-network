import { configureStore } from '@reduxjs/toolkit';

import currentUserSliceReducer from 'features/currentUserSlice/currentUserSlice';
import storiesSliceReducer from 'features/storiesSlice';

export const store = configureStore({
  reducer: {
      currentUser: currentUserSliceReducer,
      stories: storiesSliceReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;