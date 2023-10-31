import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

//Get All Addresses

export const getAllAddresses = createAsyncThunk("get/addresses", (thunkAPI) => {
  let response = useGetData(`/api/v1/addresses`, undefined, thunkAPI);
  return response;
});

//Get Specific Address

export const getSpecificAddress = createAsyncThunk(
  "get/address",
  (id, thunkAPI) => {
    let response = useGetData(`/api/v1/addresses/${id}`, undefined, thunkAPI);
    return response;
  }
);

//Create Address

export const createAddress = createAsyncThunk(
  "post/address",
  (data, thunkAPI) => {
    let response = useInsertData(`/api/v1/addresses`, data, thunkAPI);
    return response;
  }
);

//Delete Address
export const deleteAddress = createAsyncThunk(
  "delete/address",
  async (id, thunkAPI) => {
    let response = await useDeleteData(
      `/api/v1/addresses/${id}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Update Address

export const updateAddress = createAsyncThunk(
  "update/address",
  ({ id, data }, thunkAPI) => {
    let response = useUpdateData(`/api/v1/addresses/${id}`, data, thunkAPI);
    return response;
  }
);
