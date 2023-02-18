// using persist
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// reducers
import allServices from "./allServices";
import productDetails from "./productDetails";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  allServices,
  productDetails,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

//without persist

// import { configureStore } from "@reduxjs/toolkit";
// import allServicesSlice from "./allServices";
// import subServiceSlice from "./subServiceSlice";

// export const store = configureStore({
//   reducer: {
//     allServices: allServicesSlice,
//     subServices: subServiceSlice,
//   },
// });
