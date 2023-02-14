import { configureStore } from "@reduxjs/toolkit";
import allServicesSlice from "./allServices";

export const store = configureStore({
  reducer: {
    allServices: allServicesSlice,
  },
});
