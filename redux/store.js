// import { configureStore } from "@reduxjs/toolkit";
// import allServicesSlice from "./allServices";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, allServicesSlice);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: [thunk]
// });

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import allServicesSlice from "./allServices";

export const store = configureStore({
  reducer: {
    allServices: allServicesSlice,
  },
});
