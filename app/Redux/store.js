'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import summerSlice from './features/summer/summerSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  summer: summerSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
