import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateDataContainsImages } from "../../hooks/useUpdateData";

//Get All Brands With Limit
export const getAllBrands = createAsyncThunk(
  "fetch/brands",
  (limit, thunkAPI) => {
    let response = useGetData(
      `/api/v1/brands?limit=${limit}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Get All Brands With Pagination

export const getBrandsPage = createAsyncThunk(
  "fetch/brands",
  ({ page, limit }, thunkAPI) => {
    let response = useGetData(
      `/api/v1/brands?limit=${limit}&page=${page}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Create Brand

export const createBrand = createAsyncThunk(
  "post/brand",
  (formData, thunkAPI) => {
    let response = useInsertData(`/api/v1/brands`, formData, thunkAPI);
    return response;
  }
);

//Get Specific Brand

export const getSpecificBrand = createAsyncThunk(
  "fetch/brand",
  (id, thunkAPI) => {
    let response = useGetData(`/api/v1/brands/${id}`, undefined, thunkAPI);
    return response;
  }
);

//Delete Brand
export const deleteBrand = createAsyncThunk(
  "delete/brand",
  async (id, thunkAPI) => {
    let response = await useDeleteData(
      `/api/v1/brands/${id}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Update Brand

export const updateBrand = createAsyncThunk(
  "update/brand",
  ({ id, formData }, thunkAPI) => {
    let response = useUpdateDataContainsImages(
      `/api/v1/brands/${id}`,
      formData,
      thunkAPI
    );
    return response;
  }
);
