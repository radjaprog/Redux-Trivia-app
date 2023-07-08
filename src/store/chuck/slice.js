// src/store/counter/slice.js
import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performGetRandomJoke: () => {},
  performGetJokeCategories: () => {},
};

export const chuckSlice = createSlice({
  name: "chuck",
  initialState: {
    joke: "",
    categories: [],
  },
  reducers: {
    setRandomJoke: (state, action) => {
      state.joke = action.payload;
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    ...middlewareActions,
  },
});

export const {
  setRandomJoke,
  setCategories,
  performGetJokeCategories,
  performGetRandomJoke,
} = chuckSlice.actions;

export default chuckSlice.reducer;
