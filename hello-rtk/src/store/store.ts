import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { counterSlice } from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
