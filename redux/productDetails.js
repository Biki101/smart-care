import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "",
  activeSubCategory: "",
  productId: "",
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
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
  },
});

export const {
  setProductDetails,
  setActiveCategory,
  setSubCategory,
  setProductCategoryList,
  setProductId,
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
