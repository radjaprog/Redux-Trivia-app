// src/store/counter/slice.js
import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performGetRandomClue: () => {},
  performGetCategories: () => {},
  performGetCluesByCategory: () => {},
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    clues: [],
    categories: [],
  },
  reducers: {
    setClues: (state, action) => {
      state.clues = action.payload;
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    ...middlewareActions,
  },
});

export const {
  setClues,
  performGetRandomClue,
  setCategories,
  performGetCategories,
  performGetCluesByCategory,
} = triviaSlice.actions;

export default triviaSlice.reducer;
