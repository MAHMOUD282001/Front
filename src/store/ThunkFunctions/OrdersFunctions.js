import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";
import { useUpdateData } from "../../hooks/useUpdateData";

//Get All Addresses

export const getAllOrders = createAsyncThunk(
  "get/orders",
  ({ limit, page }, thunkAPI) => {
    let response = useGetData(
      `/api/v1/orders?limit=${limit}&page=${page}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

export const getSpecificOrder = createAsyncThunk(
  "get/order",
  (id, thunkAPI) => {
    let response = useGetData(`/api/v1/orders/${id}`, undefined, thunkAPI);
    return response;
  }
);

export const changeOrderToPay = createAsyncThunk(
  "update/order pay",
  (id, thunkAPI) => {
    let response = useUpdateData(
      `/api/v1/orders/${id}/pay`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

export const changeOrderToDeliver = createAsyncThunk(
  "update/order deliver",
  (id, thunkAPI) => {
    let response = useUpdateData(
      `/api/v1/orders/${id}/deliver`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

