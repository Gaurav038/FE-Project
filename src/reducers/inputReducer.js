// reducers/inputReducer.js
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
  done: false
};

const inputReducer = createReducer(initialState,{
    addName: (state, action) => {
      state.name = action.payload;
    },
    addAge:(state, action) => {
      state.age = action.payload;
    },
    addStatus:(state, action) => {
      state.done = action.payload;
    }
});

export default inputReducer;
