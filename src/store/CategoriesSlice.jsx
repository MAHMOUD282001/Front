import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoriesPage,
  getSpecificCategory,
  updateCategory,
} from "./ThunkFunctions/CategoriesFunctions";

const initialState = {
  //All Categories
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoriesError: null,

  //Specific Category
  specificCategory: {},
  specificCategoryStatus: STATUS.IDLE,
  specificCategoryError: null,

  //Specific Category
  createdCategory: {},
  createdCategoryStatus: STATUS.IDLE,
  createdCategoryError: null,

  //Deleted Category
  deletedCategoryStatus: STATUS.IDLE,
  deletedCategoryError: null,

  //Updated Category
  updatedCategory: {},
  updatedCategoryStatus: STATUS.IDLE,
  updatedCategoryError: null,
};

const CategoriesSlice = createSlice({
  name: "all categories",
  initialState,
  reducers: {
    reset: (state) => {
      state.categoriesStatus = STATUS.IDLE;
      state.specificCategoryStatus = STATUS.IDLE;
      state.createdCategoryStatus = STATUS.IDLE;
      state.updatedCategoryStatus = STATUS.IDLE;
      state.deletedCategoryStatus = STATUS.IDLE;
    },
  },

  extraReducers: (builder) => {
    //Get Categories
    builder.addCase(
      getAllCategories.pending || getCategoriesPage.pending,
      (state) => {
        state.categoriesStatus = STATUS.LOADING;
        state.categories = [];
        state.categoriesError = null;
      }
    ),
      builder.addCase(
        getAllCategories.fulfilled || getCategoriesPage.fulfilled,
        (state, action) => {
          state.categoriesStatus = STATUS.SUCCEEDED;
          state.categories = action.payload;
          state.categoriesError = null;
        }
      ),
      builder.addCase(
        getAllCategories.rejected || getCategoriesPage.rejected,
        (state, action) => {
          state.categoriesStatus = STATUS.FAILED;
          state.categories = [];
          state.categoriesError = action.payload;
        }
      );

    //Create Category
    builder.addCase(createCategory.pending, (state) => {
      state.createdCategoryStatus = STATUS.LOADING;
      state.createdCategory = {};
      state.createdCategoryError = null;
    }),
      builder.addCase(createCategory.fulfilled, (state, action) => {
        state.createdCategoryStatus = STATUS.SUCCEEDED;
        state.createdCategory = action.payload;
        state.createdCategoryError = null;
      }),
      builder.addCase(createCategory.rejected, (state, action) => {
        state.createdCategoryStatus = STATUS.FAILED;
        state.createdCategory = {};
        state.createdCategoryError = action.payload;
      });

    //Get Specific Category
    builder.addCase(getSpecificCategory.pending, (state) => {
      state.specificCategoryStatus = STATUS.LOADING;
      state.specificCategory = {};
      state.specificCategoryError = null;
    }),
      builder.addCase(getSpecificCategory.fulfilled, (state, action) => {
        state.specificCategoryStatus = STATUS.SUCCEEDED;
        state.specificCategory = action.payload;
        state.specificCategoryError = null;
      }),
      builder.addCase(getSpecificCategory.rejected, (state, action) => {
        state.specificCategoryStatus = STATUS.FAILED;
        state.specificCategory = {};
        state.specificCategoryError = action.payload;
      });

    //Delete Product
    builder.addCase(deleteCategory.pending, (state) => {
      state.deletedCategoryStatus = STATUS.LOADING;
      state.deletedCategoryError = null;
    }),
      builder.addCase(deleteCategory.fulfilled, (state) => {
        state.deletedCategoryStatus = STATUS.SUCCEEDED;
        state.deletedCategoryError = null;
      }),
      builder.addCase(deleteCategory.rejected, (state, action) => {
        state.deletedCategoryStatus = STATUS.FAILED;
        state.deletedCategoryError = action.payload;
      });

    //Update Category
    builder.addCase(updateCategory.pending, (state) => {
      state.updatedCategoryStatus = STATUS.LOADING;
      state.updatedCategory = {};
      state.updatedCategoryError = null;
    }),
      builder.addCase(updateCategory.fulfilled, (state, action) => {
        state.updatedCategoryStatus = STATUS.SUCCEEDED;
        state.updatedCategory = action.payload;
        state.updatedCategoryError = null;
      }),
      builder.addCase(updateCategory.rejected, (state, action) => {
        state.updatedCategoryStatus = STATUS.FAILED;
        state.updatedCategory = {};
        state.updatedCategoryError = action.payload;
      });
  },
});

//All Categories

export const allCategories = (state) => state.categories.categories;

export const allCategoriesStatus = (state) => state.categories.categoriesStatus;

export const allCategoriesError = (state) => state.categories.categoriesError;

//Specific Category

export const specificCategory = (state) => state.categories.specificCategory;

export const specificCategoryStatus = (state) =>
  state.categories.specificCategoryStatus;

export const specificCategoryError = (state) =>
  state.categories.specificCategoryError;

//Created Category

export const createdCategory = (state) => state.categories.createdCategory;

export const createdCategoryStatus = (state) =>
  state.categories.createdCategoryStatus;

export const createdCategoryError = (state) =>
  state.categories.createdCategoryError;

//Delete Category

export const deletedCategoryStatus = (state) =>
  state.categories.deletedCategoryStatus;

export const deletedCategoryError = (state) =>
  state.categories.deletedCategoryError;

//Update Category

export const updatedCategory = (state) => state.categories.updatedCategory;

export const updatedCategoryStatus = (state) =>
  state.categories.updatedCategoryStatus;

export const updatedCategoryError = (state) =>
  state.categories.updatedCategoryError;

//Reset Data
export const { reset } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
