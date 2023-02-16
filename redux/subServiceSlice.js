import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subServiceSlice: [],
};

export const subServiceSlice = createSlice({
  name: "subServiceSlice",
  initialState,
  reducers: {
    getSubServices: (state, action) => {
      state.subServiceSlice = action.payload;
    },
  },
});

export const { getSubServices } = subServiceSlice.actions;

export default subServiceSlice.reducer;
