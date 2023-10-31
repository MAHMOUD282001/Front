import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertDataWithImages } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateDataContainsImages } from "../../hooks/useUpdateData";

//Get Products
export const getAllProducts = createAsyncThunk(
  "fetch/products",
  async (limit, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/products?limit=${limit}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

// Get Products Page
export const getProductsPage = createAsyncThunk(
  "fetch/products",
  async ({ page, limit }, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

// Get Products By Search
export const getAllProductsSearch = createAsyncThunk(
  "fetch/products",
  async (queryString, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/products?${queryString}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Get Specific Products By Category
export const getSpecificProductsByCategory = createAsyncThunk(
  "fetch/products by category",
  async ({ id, limit, page }, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/products?category=${id}&limit=${limit}&page=${page}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Get Specific Products By Category
export const getSpecificProductsByBrand = createAsyncThunk(
  "fetch/products by brand",
  async ({ id, limit, page }, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/products?brand=${id}&limit=${limit}&page=${page}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Create Product
export const createProduct = createAsyncThunk(
  "post/product",
  async (formData, thunkAPI) => {
    let response = await useInsertDataWithImages(
      `/api/v1/products`,
      formData,
      thunkAPI
    );
    return response;
  }
);

export const getSpecificProduct = createAsyncThunk(
  "fetch/product",
  async (id, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/products/${id}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Delete Product
export const deleteProduct = createAsyncThunk(
  "delete/product",
  async (id, thunkAPI) => {
    let response = await useDeleteData(
      `/api/v1/products/${id}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

export const editProduct = createAsyncThunk(
  "edit/product",
  async ({ id, formData }, thunkAPI) => {
    let response = await useUpdateDataContainsImages(
      `/api/v1/products/${id}`,
      formData,
      thunkAPI
    );
    return response;
  }
);
