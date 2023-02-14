import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allServices: [],
  appliances: [],
};

export const allServicesSlice = createSlice({
  name: "allServices",
  initialState,
  reducers: {
    getAllServices: (state, action) => {
      state.allServices = action.payload;
    },
  },
});

export const { getAllServices } = allServicesSlice.actions;

export default allServicesSlice.reducer;
