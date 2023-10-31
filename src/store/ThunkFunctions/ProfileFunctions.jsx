import { createAsyncThunk } from "@reduxjs/toolkit";
import { useUpdateData } from "../../hooks/useUpdateData";

//Update Profile

export const updateProfile = createAsyncThunk(
  "update/profile",
  (data, thunkAPI) => {
    let response = useUpdateData(`/api/v1/users/updateMe`, data, thunkAPI);
    return response;
  }
);

export const updatePassword = createAsyncThunk(
  "update/password",
  (data, thunkAPI) => {
    let response = useUpdateData(
      `/api/v1/users/changeMyPassword`,
      data,
      thunkAPI
    );
    return response;
  }
);
