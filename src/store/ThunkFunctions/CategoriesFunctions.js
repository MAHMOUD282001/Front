import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImages } from "../../hooks/useInsertData";
import { useUpdateData, useUpdateDataContainsImages } from "../../hooks/useUpdateData";
import useDeleteData from "../../hooks/useDeleteData";

//Get All Categories With Limit
export const getAllCategories = createAsyncThunk(
  "fetch/categories",
  async (limit, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/categories?limit=${limit}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Get All Categories With Pagination

export const getCategoriesPage = createAsyncThunk(
  "fetch/categories",
  async ({ page, limit }, thunkAPI) => {
    console.log(limit);
    console.log(page);

    let response = await useGetData(
      `/api/v1/categories?page=${page}&limit=${limit}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Create Category

export const createCategory = createAsyncThunk(
  "post/category",
  (formData, thunkAPI) => {
    let response = useInsertDataWithImages(
      `/api/v1/categories`,
      formData,
      thunkAPI
    );
    return response;
  }
);

//Get Specific Category

export const getSpecificCategory = createAsyncThunk(
  "fetch/category",
  (id, thunkAPI) => {
    let response = useGetData(`/api/v1/categories/${id}`, undefined, thunkAPI);
    return response;
  }
);

//Delete Product
export const deleteCategory = createAsyncThunk(
  "delete/category",
  async (id, thunkAPI) => {
    let response = await useDeleteData(
      `/api/v1/categories/${id}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Update Category

export const updateCategory = createAsyncThunk(
  "update/category",
  ({ id, formData }, thunkAPI) => {
    let response = useUpdateDataContainsImages(
      `/api/v1/categories/${id}`,
      formData,
      thunkAPI
    );
    return response;
  }
);
