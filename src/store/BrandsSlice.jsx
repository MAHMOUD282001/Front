import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getBrandsPage,
  getSpecificBrand,
  updateBrand,
} from "./ThunkFunctions/BrandsFunctions";

const initialState = {
  //All Brands
  brands: [],
  brandsStatus: STATUS.IDLE,
  brandsError: null,

  //Create Brand
  createdBrand: {},
  createdBrandStatus: STATUS.IDLE,
  createdBrandError: null,

  //Get Brand
  specificBrand: {},
  specificBrandStatus: STATUS.IDLE,
  specificBrandError: null,

  //Deleted Brand
  deletedBrandStatus: STATUS.IDLE,
  deletedBrandError: null,

  //Updated Category
  updatedBrand: {},
  updatedBrandStatus: STATUS.IDLE,
  updatedBrandError: null,
};

const BrandsSlice = createSlice({
  name: "all Brands",
  initialState,
  reducers: {
    reset: (state) => {
      state.brandsStatus = STATUS.IDLE;
      state.specificBrandStatus = STATUS.IDLE;
      state.createdBrandStatus = STATUS.IDLE;
      state.deletedBrandStatus = STATUS.IDLE;
      state.updatedBrandStatus = STATUS.IDLE;
    },
  },

  extraReducers: (builder) => {
    //Get Brands
    builder.addCase(getAllBrands.pending || getBrandsPage.pending, (state) => {
      state.brandsStatus = STATUS.LOADING;
      state.brands = [];
      state.brandsError = null;
    }),
      builder.addCase(
        getAllBrands.fulfilled || getBrandsPage.fulfilled,
        (state, action) => {
          state.brandsStatus = STATUS.SUCCEEDED;
          state.brands = action.payload;
          state.brandsError = null;
        }
      ),
      builder.addCase(
        getAllBrands.rejected || getBrandsPage.rejected,
        (state, action) => {
          state.brandsStatus = STATUS.FAILED;
          state.brands = [];
          state.brandsError = action.payload;
        }
      );

    //Get Specific Brand
    builder.addCase(getSpecificBrand.pending, (state) => {
      state.specificBrandStatus = STATUS.LOADING;
      state.specificBrand = {};
      state.specificBrandError = null;
    }),
      builder.addCase(getSpecificBrand.fulfilled, (state, action) => {
        state.specificBrandStatus = STATUS.SUCCEEDED;
        state.specificBrand = action.payload;
        state.specificBrandError = null;
      }),
      builder.addCase(getSpecificBrand.rejected, (state, action) => {
        state.specificBrandStatus = STATUS.FAILED;
        state.specificBrand = {};
        state.specificBrandError = action.payload;
      });

    //Create Brand
    builder.addCase(createBrand.pending, (state) => {
      state.createdBrandStatus = STATUS.LOADING;
      state.createdBrand = {};
      state.createdBrandError = null;
    }),
      builder.addCase(createBrand.fulfilled, (state, action) => {
        state.createdBrandStatus = STATUS.SUCCEEDED;
        state.createdBrand = action.payload;
        state.createdBrandError = null;
      }),
      builder.addCase(createBrand.rejected, (state, action) => {
        state.createdBrandStatus = STATUS.FAILED;
        state.createdBrand = {};
        state.createdBrandError = action.payload;
      });

    //Delete Brand
    builder.addCase(deleteBrand.pending, (state) => {
      state.deletedBrandStatus = STATUS.LOADING;
      state.deletedBrandError = null;
    }),
      builder.addCase(deleteBrand.fulfilled, (state) => {
        state.deletedBrandStatus = STATUS.SUCCEEDED;
        state.deletedBrandError = null;
      }),
      builder.addCase(deleteBrand.rejected, (state, action) => {
        state.deletedBrandStatus = STATUS.FAILED;
        state.deletedBrandError = action.payload;
      });

    //Update Brand
    builder.addCase(updateBrand.pending, (state) => {
      state.updatedBrandStatus = STATUS.LOADING;
      state.updatedBrand = {};
      state.updatedBrandError = null;
    }),
      builder.addCase(updateBrand.fulfilled, (state, action) => {
        state.updatedBrandStatus = STATUS.SUCCEEDED;
        state.updatedBrand = action.payload;
        state.updatedBrandError = null;
      }),
      builder.addCase(updateBrand.rejected, (state, action) => {
        state.updatedBrandStatus = STATUS.FAILED;
        state.updatedBrand = {};
        state.updatedBrandError = action.payload;
      });
  },
});

//All Brands
export const allBrands = (state) => state.brands.brands;

export const allBrandsStatus = (state) => state.brands.brandsStatus;

export const allBrandsError = (state) => state.brands.brandsError;

//Specific Brand
export const specificBrand = (state) => state.brands.specificBrand;

export const specificBrandStatus = (state) => state.brands.specificBrandStatus;

export const specificBrandError = (state) => state.brands.specificBrandError;

//Create Brand
export const createdBrand = (state) => state.brands.createBrand;

export const createdBrandStatus = (state) => state.brands.createdBrandStatus;

export const createdBrandError = (state) => state.brands.createdBrandError;

//Delete Brand
export const deletedBrandStatus = (state) => state.brands.deletedBrandStatus;

export const deletedBrandError = (state) => state.brands.deletedBrandError;

//Update Brand
export const updatedBrand = (state) => state.brands.updatedBrand;

export const updatedBrandStatus = (state) => state.brands.updatedBrandStatus;

export const updatedBrandError = (state) => state.brands.updatedBrandError;

//Reset Data
export const { reset } = BrandsSlice.actions;

export default BrandsSlice.reducer;
