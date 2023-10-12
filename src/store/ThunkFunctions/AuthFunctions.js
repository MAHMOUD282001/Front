import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";

//Create User

export const createUser = createAsyncThunk(
  "create user",
  (formData, thunkAPI) => {
    let response = useInsertData(`/api/v1/auth/signup`, formData, thunkAPI);
    return response;
  }
);

//Login

export const loginUser = createAsyncThunk(
  "login user",
  (formData, thunkAPI) => {
    let response = useInsertData(`/api/v1/auth/login`, formData, thunkAPI);
    return response;
  }
);

//ForgetPassword

export const forgetPassword = createAsyncThunk(
  "forget password",
  (formData, thunkAPI) => {
    let response = useInsertData(
      `/api/v1/auth/forgotPasswords`,
      formData,
      thunkAPI
    );
    return response;
  }
);

//Verify Code

export const verifyCode = createAsyncThunk(
  "verify code",
  (formData, thunkAPI) => {
    let response = useInsertData(
      `/api/v1/auth/verifyResetCode`,
      formData,
      thunkAPI
    );
    return response;
  }
);


//Reset Password

export const resetPassword = createAsyncThunk(
  "reset password",
  (formData, thunkAPI) => {
    console.log(formData);
    let response = useUpdateData(
      `/api/v1/auth/resetPassword`,
      formData,
      thunkAPI
    );
    return response;
  }
);
