import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

//Get Coupons

export const getCoupons = createAsyncThunk(
  "get/coupons",
  async (limit, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/coupons?limit=${limit}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

export const getCouponsPage = createAsyncThunk(
  "get/coupons",
  async ({ page, limit }, thunkAPI) => {
    let response = await useGetData(
      `/api/v1/coupons?page=${page}&limit=${limit}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Create Coupon

export const createCoupon = createAsyncThunk(
  "post/coupon",
  async (data, thunkAPI) => {
    let response = await useInsertData(`/api/v1/coupons`, data, thunkAPI);
    return response;
  }
);

//Create Coupon

export const deleteCoupon = createAsyncThunk(
  "delete/coupon",
  async (id, thunkAPI) => {
    let response = await useDeleteData(
      `/api/v1/coupons/${id}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Create Coupon

export const updateCoupon = createAsyncThunk(
  "update/coupon",
  async ({ id, data }, thunkAPI) => {
    let response = await useUpdateData(`/api/v1/coupons/${id}`, data, thunkAPI);
    return response;
  }
);
