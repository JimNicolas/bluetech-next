import { configureStore } from '@reduxjs/toolkit';
import userLoggedReducer from './slices/userLoggedSlices';
export const store = configureStore({
  reducer: {
    userLoggedReducer,
  },
});

export default store;
