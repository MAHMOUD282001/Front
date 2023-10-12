import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  createUser,
  forgetPassword,
  loginUser,
  resetPassword,
  verifyCode,
} from "./ThunkFunctions/AuthFunctions";

const initialState = {
  //Created User
  createdUser: [],
  createdUserStatus: STATUS.IDLE,
  createdUserError: null,

  //LoggedIn User
  loggedInUser: [],
  loggedInUserStatus: STATUS.IDLE,
  loggedInUserError: null,

  //Forget Password
  forgettedPasswordStatus: STATUS.IDLE,
  forgettedPasswordError: null,

  //Verify Code
  verifyCodeStatus: STATUS.IDLE,
  verifyCodeError: null,

  //Reset Password
  resetedPassword: [],
  resetedPasswordStatus: STATUS.IDLE,
  resetedPasswordError: null,
};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.createdUser = [];
      state.createdUserStatus = STATUS.IDLE;
      state.createdUserError = null;
      state.loggedInUser = [];
      state.loggedInUserStatus = STATUS.IDLE;
      state.loggedInUserError = null;
      state.forgettedPasswordStatus = STATUS.IDLE;
      state.forgettedPasswordError = null;
      state.verifyCodeStatus = STATUS.IDLE;
      state.verifyCodeError = null;
      state.resetedPasswordStatus = STATUS.IDLE;
      state.resetedPasswordError = null;
    },
  },

  extraReducers: (builder) => {
    //Create User
    builder.addCase(createUser.pending, (state) => {
      state.createdUserStatus = STATUS.LOADING;
      state.createdUser = [];
      state.createdUserError = null;
    }),
      builder.addCase(createUser.fulfilled, (state, action) => {
        state.createdUserStatus = STATUS.SUCCEEDED;
        state.createdUser = action.payload;
        state.createdUserError = null;
      }),
      builder.addCase(createUser.rejected, (state, action) => {
        state.createdUserStatus = STATUS.FAILED;
        state.createdUser = [];
        state.createdUserError = action.payload;
      });

    //Login User
    builder.addCase(loginUser.pending, (state) => {
      state.loggedInUserStatus = STATUS.LOADING;
      state.loggedInUser = [];
      state.loggedInUserError = null;
    }),
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.loggedInUserStatus = STATUS.SUCCEEDED;
        state.loggedInUser = action.payload;
        state.loggedInUserError = null;
      }),
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loggedInUserStatus = STATUS.FAILED;
        state.loggedInUser = [];
        state.loggedInUserError = action.payload;
      });

    //Forget Password
    builder.addCase(forgetPassword.pending, (state) => {
      state.forgettedPasswordStatus = STATUS.LOADING;
      state.forgettedPasswordError = null;
    }),
      builder.addCase(forgetPassword.fulfilled, (state) => {
        state.forgettedPasswordStatus = STATUS.SUCCEEDED;
        state.forgettedPasswordError = null;
      }),
      builder.addCase(forgetPassword.rejected, (state, action) => {
        state.forgettedPasswordStatus = STATUS.FAILED;
        state.forgettedPasswordError = action.payload;
      });

    //Verify Code
    builder.addCase(verifyCode.pending, (state) => {
      state.verifyCodeStatus = STATUS.LOADING;
      state.verifyCodeError = null;
    }),
      builder.addCase(verifyCode.fulfilled, (state) => {
        state.verifyCodeStatus = STATUS.SUCCEEDED;
        state.verifyCodeError = null;
      }),
      builder.addCase(verifyCode.rejected, (state, action) => {
        state.verifyCodeStatus = STATUS.FAILED;
        state.verifyCodeError = action.payload;
      });

    //Reset Password
    builder.addCase(resetPassword.pending, (state) => {
      state.resetedPasswordStatus = STATUS.LOADING;
      state.resetedPassword = [];
      state.resetedPasswordError = null;
    }),
      builder.addCase(resetPassword.fulfilled, (state, action) => {
        state.resetedPasswordStatus = STATUS.SUCCEEDED;
        state.resetedPassword = action.payload;
        state.resetedPasswordError = null;
      }),
      builder.addCase(resetPassword.rejected, (state, action) => {
        state.resetedPasswordStatus = STATUS.FAILED;
        state.resetedPassword = [];
        state.resetedPasswordError = action.payload;
      });
  },
});

//Created User
export const createdUser = (state) => state.auth.createdUser;
export const createdUserStatus = (state) => state.auth.createdUserStatus;
export const createdUserError = (state) => state.auth.createdUserError;

//Logged In User
export const loggedInUser = (state) => state.auth.loggedInUser;
export const loggedInUserStatus = (state) => state.auth.loggedInUserStatus;
export const loggedInUserError = (state) => state.auth.loggedInUserError;

//Forget Password
export const forgettedPasswordStatus = (state) =>
  state.auth.forgettedPasswordStatus;
export const forgettedPasswordError = (state) =>
  state.auth.forgettedPasswordError;

//Verify Code
export const verifyCodeStatus = (state) => state.auth.verifyCodeStatus;
export const verifyCodeError = (state) => state.auth.verifyCodeError;

//Reset Password
export const resetedPassword = (state) => state.auth.resetedPassword;
export const resetedPasswordStatus = (state) =>
  state.auth.resetedPasswordStatus;
export const resetedPasswordError = (state) => state.auth.resetedPasswordError;

//Reset Data
export const { reset } = AuthSlice.actions;

export default AuthSlice.reducer;
