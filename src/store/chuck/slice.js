// src/store/counter/slice.js
import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  // saga actions
};

export const chuckSlice = createSlice({
  name: "chuck",
  initialState: {
    value: "",
  },
  reducers: {
    // actions

    ...middlewareActions,
  },
});

export const {
  // reducers
} = chuckSlice.actions;

export default chuckSlice.reducer;
