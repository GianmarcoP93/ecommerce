import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;
