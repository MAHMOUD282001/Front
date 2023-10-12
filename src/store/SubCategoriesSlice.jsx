import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  createSubCategory,
  getAllSubCategories,
  getSpecificSubCategory,
} from "./ThunkFunctions/SubCategoriesFunctions";

const initialState = {
  subCategory: {},
  subCategoryStatus: STATUS.IDLE,
  subCategoryError: null,
  subCategories: [],
  subCategoriesStatus: STATUS.IDLE,
  subCategoriesError: null,
};

const SubCategoriesSlice = createSlice({
  name: "all sub categories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //Post SubCategory
    builder.addCase(createSubCategory.pending, (state) => {
      state.subCategoryStatus = STATUS.LOADING;
      state.subCategory = {};
      state.subCategoryError = null;
    }),
      builder.addCase(createSubCategory.fulfilled, (state, action) => {
        state.subCategoryStatus = STATUS.SUCCEEDED;
        state.subCategory = action.payload;
        state.subCategoryError = null;
      }),
      builder.addCase(createSubCategory.rejected, (state, action) => {
        state.subCategoryStatus = STATUS.FAILED;
        state.subCategory = {};
        state.subCategoryError = action.payload;
      });

    //Get SubCategory
    builder.addCase(getSpecificSubCategory.pending, (state) => {
      state.subCategoryStatus = STATUS.LOADING;
      state.subCategory = {};
      state.subCategoryError = null;
    }),
      builder.addCase(getSpecificSubCategory.fulfilled, (state, action) => {
        state.subCategoryStatus = STATUS.SUCCEEDED;
        state.subCategory = action.payload;
        state.subCategoryError = null;
      }),
      builder.addCase(getSpecificSubCategory.rejected, (state, action) => {
        state.subCategoryStatus = STATUS.FAILED;
        state.subCategory = {};
        state.subCategoryError = action.payload;
      });

    // Get All Sub Categories
    builder.addCase(getAllSubCategories.pending, (state) => {
      state.subCategoriesStatus = STATUS.LOADING;
      state.subCategories = [];
      state.subCategoriesError = null;
    }),
      builder.addCase(getAllSubCategories.fulfilled, (state, action) => {
        state.subCategoriesStatus = STATUS.SUCCEEDED;
        state.subCategories = action.payload;
        state.subCategoriesError = null;
      }),
      builder.addCase(getAllSubCategories.rejected, (state, action) => {
        state.subCategoriesStatus = STATUS.FAILED;
        state.subCategories = [];
        state.subCategoriesError = action.payload;
      });
  },
});

// Added SubCategories
export const addedSubCategory = (state) => state.subCategories.subCategory;

export const addedSubCategoryStatus = (state) =>
  state.subCategories.subCategoryStatus;

export const addedSubCategoryError = (state) =>
  state.subCategories.subCategoryError;

//All SubCategories
export const allSubCategories = (state) => state.subCategories.subCategories;

export const allSubCategoriesStatus = (state) =>
  state.subCategories.subCategoriesStatus;

export const allSubCategoriesError = (state) =>
  state.subCategories.subCategoriesError;

export default SubCategoriesSlice.reducer;
