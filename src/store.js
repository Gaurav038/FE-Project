// store.js
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './reducers/inputReducer';

const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

export default store;
