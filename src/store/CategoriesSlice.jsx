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
  category: {},
  categoryStatus: STATUS.IDLE,
  categoryError: null,

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
      state.categoryStatus = STATUS.IDLE;
      state.updatedCategoryStatus = STATUS.IDLE;
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

    //Create Category || Get Specific Category
    builder.addCase(
      createCategory.pending || getSpecificCategory.pending,
      (state) => {
        state.categoryStatus = STATUS.LOADING;
        state.category = {};
        state.categoryError = null;
      }
    ),
      builder.addCase(
        createCategory.fulfilled || getSpecificCategory.fulfilled,
        (state, action) => {
          state.categoryStatus = STATUS.SUCCEEDED;
          state.category = action.payload;
          state.categoryError = null;
        }
      ),
      builder.addCase(
        createCategory.rejected || getSpecificCategory.rejected,
        (state, action) => {
          state.categoryStatus = STATUS.FAILED;
          state.category = {};
          state.categoryError = action.payload;
        }
      );

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

export const specificCategory = (state) => state.categories.category;

export const specificCategoryStatus = (state) =>
  state.categories.categoryStatus;

export const specificCategoryError = (state) => state.categories.categoryError;

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
