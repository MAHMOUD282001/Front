import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  updatePassword,
  updateProfile,
} from "./ThunkFunctions/ProfileFunctions";

const initialState = {
  //Update User
  editedUser: {},
  editedUserStatus: STATUS.IDLE,
  editedUserError: null,

  //Update Password
  editedPassword: {},
  editedPasswordStatus: STATUS.IDLE,
  editedPasswordError: null,
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.editedUserStatus = STATUS.IDLE;
      state.editedUserError = null;
      state.editedPasswordStatus = STATUS.IDLE;
      state.editedPasswordError = null;
    },
  },

  extraReducers: (builder) => {
    //Update Profile
    builder.addCase(updateProfile.pending, (state) => {
      state.editedUserStatus = STATUS.LOADING;
      state.editedUser = {};
      state.editedUserError = null;
    }),
      builder.addCase(updateProfile.fulfilled, (state, action) => {
        state.editedUserStatus = STATUS.SUCCEEDED;
        state.editedUser = action.payload;
        state.editedUserError = null;
      }),
      builder.addCase(updateProfile.rejected, (state, action) => {
        state.editedUserStatus = STATUS.FAILED;
        state.editedUser = {};
        state.editedUserError = action.payload;
      });

    //Update Password
    builder.addCase(updatePassword.pending, (state) => {
      state.editedPasswordStatus = STATUS.LOADING;
      state.editedPassword = {};
      state.editedPasswordError = null;
    }),
      builder.addCase(updatePassword.fulfilled, (state, action) => {
        state.editedPasswordStatus = STATUS.SUCCEEDED;
        state.editedPassword = action.payload;
        state.editedPasswordError = null;
      }),
      builder.addCase(updatePassword.rejected, (state, action) => {
        state.editedPasswordStatus = STATUS.FAILED;
        state.editedPassword = {};
        state.editedPasswordError = action.payload;
      });
  },
});

//Update Profile
export const editedUser = (state) => state.profile.editedUser;
export const editedUserStatus = (state) => state.profile.editedUserStatus;
export const editedUserError = (state) => state.profile.editedUserError;

//Update Password
export const editedPassword = (state) => state.profile.editedPassword;
export const editedPasswordStatus = (state) =>
  state.profile.editedPasswordStatus;
export const editedPasswordError = (state) => state.profile.editedPasswordError;

export const { reset } = ProfileSlice.actions;

export default ProfileSlice.reducer;
