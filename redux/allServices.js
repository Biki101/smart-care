import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allServices: [],
  // AppliancesRepair: [],
  // PopularBrands: [],
  // WarrantyProducts: [],
  // plumber: [],
  // Air-Purifier/Humidifier: [],
  // Mobiles&Tabs: [],
  // CCTVRepairService: [],
  // Computer/Printer: [],
  // MedicalEquipment: [],
  // DroneRepair: [],
  // CarpenterService: [],
  // Cleaning&Pest Control: [],
};

export const allServicesSlice = createSlice({
  name: "allServices",
  initialState,
  reducers: {
    getAllServices: (state, action) => {
      let newData = [...action.payload];
      return {
        ...state,
        allServices: newData,
        "Cleaning & Pest Control": action.payload.filter(
          (items, index) => items.brand_name === "Cleaning & Pest Control"
        ),
      };
    },
  },
});

export const { getAllServices } = allServicesSlice.actions;

export default allServicesSlice.reducer;
