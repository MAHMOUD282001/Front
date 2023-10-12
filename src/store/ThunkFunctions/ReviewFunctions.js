import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

//Create Review

export const createReview = createAsyncThunk(
  "post/review",
  ({ id, data }, thunkAPI) => {
    let response = useInsertData(
      `/api/v1/products/${id}/reviews`,
      data,
      thunkAPI
    );
    return response;
  }
);

//Get Reviews

export const getReviews = createAsyncThunk(
  "get/reviews",
  ({ id, page, limit }, thunkAPI) => {
    let response = useGetData(
      `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Delete Review

export const deleteReview = createAsyncThunk(
  "delete/review",
  (id, thunkAPI) => {
    let response = useDeleteData(`/api/v1/reviews/${id}`, undefined, thunkAPI);
    return response;
  }
);

//Update Review

export const UpdateReview = createAsyncThunk(
  "update/review",
  ({ id, data }, thunkAPI) => {
    let response = useUpdateData(`/api/v1/reviews/${id}`, data, thunkAPI);
    return response;
  }
);
