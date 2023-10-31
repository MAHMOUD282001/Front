import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getAllProductsSearch,
  getProductsPage,
  getSpecificProduct,
  getSpecificProductsByBrand,
  getSpecificProductsByCategory,
} from "./ThunkFunctions/ProductsFunctions";

const initialState = {
  //All Products
  products: [],
  productsStatus: STATUS.IDLE,
  productsError: null,

  //Get Products By Category
  specificProductsByCategory: [],
  specificProductsByCategoryStatus: STATUS.IDLE,
  specificProductsByCategoryError: null,

  //Get Products By Brand
  specificProductsByBrand: [],
  specificProductsByBrandStatus: STATUS.IDLE,
  specificProductsByBrandError: null,

  //Specific Product
  specificProduct: {},
  specificProductStatus: STATUS.IDLE,
  specificProductError: null,

  //Added Product
  addedProduct: {},
  addedProductStatus: STATUS.IDLE,
  addedProductError: null,

  //Deleted Product
  deletedProductStatus: {},
  deletedProductError: null,

  //Updated Product
  updatedProduct: [],
  updatedProductStatus: STATUS.IDLE,
  updatedProductError: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.productsStatus = STATUS.IDLE;
      state.specificProductsByCategoryStatus = STATUS.IDLE;
      state.specificProductStatus = STATUS.IDLE;
      state.deletedProductStatus = STATUS.IDLE;
      state.addedProductStatus = STATUS.IDLE;
      state.updatedProductStatus = STATUS.IDLE;
    },
  },

  extraReducers: (builder) => {
    // Get Products
    builder.addCase(
      getAllProducts.pending ||
        getProductsPage.pending ||
        getAllProductsSearch.pending,
      (state) => {
        state.productsStatus = STATUS.LOADING;
        state.products = [];
        state.productsError = null;
      }
    ),
      builder.addCase(
        getAllProducts.fulfilled ||
          getProductsPage.fulfilled ||
          getAllProductsSearch.fulfilled,
        (state, action) => {
          state.productsStatus = STATUS.SUCCEEDED;
          state.products = action.payload;
          state.productsError = null;
        }
      ),
      builder.addCase(
        getAllProducts.rejected ||
          getProductsPage.rejected ||
          getAllProductsSearch.rejected,
        (state, action) => {
          state.productsStatus = STATUS.FAILED;
          state.products = [];
          state.productsError = action.payload;
        }
      );

    // Get Products By Category
    builder.addCase(getSpecificProductsByCategory.pending, (state) => {
      state.specificProductsByCategoryStatus = STATUS.LOADING;
      state.specificProductsByCategory = [];
      state.productsError = null;
    }),
      builder.addCase(
        getSpecificProductsByCategory.fulfilled,
        (state, action) => {
          state.specificProductsByCategoryStatus = STATUS.SUCCEEDED;
          state.specificProductsByCategory = action.payload;
          state.specificProductsByCategoryError = null;
        }
      ),
      builder.addCase(
        getSpecificProductsByCategory.rejected,
        (state, action) => {
          state.specificProductsByCategoryStatus = STATUS.FAILED;
          state.specificProductsByCategory = [];
          state.specificProductsByCategoryError = action.payload;
        }
      );

    // Get Products By Brand
    builder.addCase(getSpecificProductsByBrand.pending, (state) => {
      state.specificProductsByBrandStatus = STATUS.LOADING;
      state.specificProductsByBrand = [];
      state.specificProductsByBrandError = null;
    }),
      builder.addCase(getSpecificProductsByBrand.fulfilled, (state, action) => {
        state.specificProductsByBrandStatus = STATUS.SUCCEEDED;
        state.specificProductsByBrand = action.payload;
        state.specificProductsByBrandError = null;
      }),
      builder.addCase(getSpecificProductsByBrand.rejected, (state, action) => {
        state.specificProductsByBrandStatus = STATUS.FAILED;
        state.specificProductsByBrand = [];
        state.specificProductsByBrandError = action.payload;
      });

    //Get Specific Product
    builder.addCase(getSpecificProduct.pending, (state) => {
      state.specificProductStatus = STATUS.LOADING;
      state.specificProduct = {};
      state.specificProductError = null;
    }),
      builder.addCase(getSpecificProduct.fulfilled, (state, action) => {
        state.specificProductStatus = STATUS.SUCCEEDED;
        state.specificProduct = action.payload;
        state.specificProductError = null;
      }),
      builder.addCase(getSpecificProduct.rejected, (state, action) => {
        state.specificProductStatus = STATUS.FAILED;
        state.specificProduct = {};
        state.specificProductError = action.payload;
      });

    //Create Product
    builder.addCase(createProduct.pending, (state) => {
      state.addedProductStatus = STATUS.LOADING;
      state.addedProduct = {};
      state.addedProductError = null;
    }),
      builder.addCase(createProduct.fulfilled, (state, action) => {
        state.addedProductStatus = STATUS.SUCCEEDED;
        state.addedProduct = action.payload;
        state.addedProductError = null;
      }),
      builder.addCase(createProduct.rejected, (state, action) => {
        state.addedProductStatus = STATUS.FAILED;
        state.addedProduct = {};
        state.addedProductError = action.payload;
      });

    //Delete Product
    builder.addCase(deleteProduct.pending, (state) => {
      state.deletedProductStatus = STATUS.LOADING;
      state.deletedProductError = null;
    }),
      builder.addCase(deleteProduct.fulfilled, (state) => {
        state.deletedProductStatus = STATUS.SUCCEEDED;
        state.deletedProductError = null;
      }),
      builder.addCase(deleteProduct.rejected, (state, action) => {
        state.deletedProductStatus = STATUS.FAILED;
        state.deletedProductError = action.payload;
      });

    //Update Product
    builder.addCase(editProduct.pending, (state) => {
      state.updatedProductStatus = STATUS.LOADING;
      state.updatedProduct = {};
      state.updatedProductError = null;
    }),
      builder.addCase(editProduct.fulfilled, (state, action) => {
        state.updatedProductStatus = STATUS.SUCCEEDED;
        state.updatedProduct = action.payload;
        state.updatedProductError = null;
      }),
      builder.addCase(editProduct.rejected, (state, action) => {
        state.updatedProductStatus = STATUS.FAILED;
        state.updatedProduct = {};
        state.updatedProductError = action.payload;
      });
  },
});

//All Products
export const allProducts = (state) => state.products.products;
export const allProductsStatus = (state) => state.products.productsStatus;
export const allProductsError = (state) => state.products.productsError;

//Get Products By Category
export const specificProductsByCategory = (state) =>
  state.products.specificProductsByCategory;
export const specificProductsByCategoryStatus = (state) =>
  state.products.specificProductsByCategoryStatus;
export const specificProductsByCategoryError = (state) =>
  state.products.specificProductsByCategoryError;

//Get Products By Brand
export const specificProductsByBrand = (state) =>
  state.products.specificProductsByBrand;
export const specificProductsByBrandStatus = (state) =>
  state.products.specificProductsByBrandStatus;
export const specificProductsByBrandError = (state) =>
  state.products.specificProductsByBrandError;

//Get Specific Product
export const specificProduct = (state) => state.products.specificProduct;
export const specificProductStatus = (state) =>
  state.products.specificProductStatus;
export const specificProductError = (state) =>
  state.products.specificProductError;

//Create Product
export const addedProduct = (state) => state.products.addedProduct;
export const addedProductStatus = (state) => state.products.addedProductStatus;
export const addedProductError = (state) => state.products.addedProductError;

//Deleted Product
export const deletedProductStatus = (state) =>
  state.products.deletedProductStatus;
export const deletedProductError = (state) =>
  state.products.deletedProductError;

//Updated Product
export const updatedProduct = (state) => state.products.updatedProduct;
export const updatedProductStatus = (state) =>
  state.products.updatedProductStatus;
export const updatedProductError = (state) =>
  state.products.updatedProductError;

//Reset Data
export const { reset } = ProductsSlice.actions;

export default ProductsSlice.reducer;
