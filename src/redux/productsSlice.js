import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    visited: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.value = action.payload;
    },
    addVisited: (state, action) => {
      state.visited.push(action.payload);
    },
  },
});

export const { addProducts, addVisited } = productsSlice.actions;
