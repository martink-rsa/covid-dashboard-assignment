import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './covid';

export const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});
