import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "",
  activeSubCategory: "",

  productDetails: "",
  productList: [],
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSubCategory: (state, action) => {
      state.activeSubCategory = action.payload;
    },
    setProductCategoryList: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const {
  setProductDetails,
  setActiveCategory,
  setSubCategory,
  setProductCategoryList,
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
