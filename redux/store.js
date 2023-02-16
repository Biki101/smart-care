// import { createStore } from "@reduxjs/toolkit";
// import allServices from "./allServices";
// import { persistStore, persistReducer } from "reduxjs-toolkit-persist";
// import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, allServices);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

import { configureStore } from "@reduxjs/toolkit";
import allServicesSlice from "./allServices";
import subServiceSlice from "./subServiceSlice";

export const store = configureStore({
  reducer: {
    allServices: allServicesSlice,
    subServices: subServiceSlice,
  },
});
