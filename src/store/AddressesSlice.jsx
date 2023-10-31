import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  createAddress,
  deleteAddress,
  getAllAddresses,
  getSpecificAddress,
  updateAddress,
} from "./ThunkFunctions/AddressesFunctions";

const initialState = {
  //All Addresses
  addresses: [],
  addressesStatus: STATUS.IDLE,
  addressesError: null,

  //Get Address
  specificAddress: {},
  specificAddressStatus: STATUS.IDLE,
  specificAddressError: null,

  //Create Address
  createdAddress: {},
  createdAddressStatus: STATUS.IDLE,
  createdAddressError: null,

  //Delete Address
  deletedAddress: {},
  deletedAddressStatus: STATUS.IDLE,
  deletedAddressError: null,

  //Update Address
  updatedAddress: {},
  updatedAddressStatus: STATUS.IDLE,
  updatedAddressError: null,
};

const AddressesSlice = createSlice({
  name: "Addresses",
  initialState,
  reducers: {
    reset: (state) => {
      state.addressesStatus = STATUS.IDLE;
      state.specificAddressStatus = STATUS.IDLE;
      state.createdAddressStatus = STATUS.IDLE;
      state.updatedAddressStatus = STATUS.IDLE;
      state.deletedAddressStatus = STATUS.IDLE;
    },
  },

  extraReducers: (builder) => {
    //Get Addresses
    builder.addCase(getAllAddresses.pending, (state) => {
      state.addressesStatus = STATUS.LOADING;
      state.addresses = [];
      state.addressesError = null;
    }),
      builder.addCase(getAllAddresses.fulfilled, (state, action) => {
        state.addressesStatus = STATUS.SUCCEEDED;
        state.addresses = action.payload;
        state.addressesError = null;
      }),
      builder.addCase(getAllAddresses.rejected, (state, action) => {
        state.addressesStatus = STATUS.FAILED;
        state.addresses = [];
        state.addressesError = action.payload;
      });

    //Add Address
    builder.addCase(createAddress.pending, (state) => {
      state.createdAddressStatus = STATUS.LOADING;
      state.createdAddress = {};
      state.createdAddressError = null;
    }),
      builder.addCase(createAddress.fulfilled, (state, action) => {
        state.createdAddressStatus = STATUS.SUCCEEDED;
        state.createdAddress = action.payload;
        state.createdAddressError = null;
      }),
      builder.addCase(createAddress.rejected, (state, action) => {
        state.createdAddressStatus = STATUS.FAILED;
        state.createdAddress = {};
        state.createdAddressError = action.payload;
      });

    //Get Address
    builder.addCase(getSpecificAddress.pending, (state) => {
      state.specificAddressStatus = STATUS.LOADING;
      state.specificAddress = {};
      state.specificAddressError = null;
    }),
      builder.addCase(getSpecificAddress.fulfilled, (state, action) => {
        state.specificAddressStatus = STATUS.SUCCEEDED;
        state.specificAddress = action.payload;
        state.specificAddressError = null;
      }),
      builder.addCase(getSpecificAddress.rejected, (state, action) => {
        state.specificAddressStatus = STATUS.FAILED;
        state.specificAddress = {};
        state.specificAddressError = action.payload;
      });

    //Delete Address
    builder.addCase(deleteAddress.pending, (state) => {
      state.deletedAddressStatus = STATUS.LOADING;
      state.deletedAddress = {};
      state.deletedAddressError = null;
    }),
      builder.addCase(deleteAddress.fulfilled, (state, action) => {
        state.deletedAddressStatus = STATUS.SUCCEEDED;
        state.deletedAddress = action.payload;
        state.deletedAddressError = null;
      }),
      builder.addCase(deleteAddress.rejected, (state, action) => {
        state.deletedAddressStatus = STATUS.FAILED;
        state.deletedAddress = {};
        state.deletedAddressError = action.payload;
      });

    //Update Address
    builder.addCase(updateAddress.pending, (state) => {
      state.updatedAddressStatus = STATUS.LOADING;
      state.updatedAddress = {};
      state.updatedAddressError = null;
    }),
      builder.addCase(updateAddress.fulfilled, (state, action) => {
        state.updatedAddressStatus = STATUS.SUCCEEDED;
        state.updatedAddress = action.payload;
        state.updatedAddressError = null;
      }),
      builder.addCase(updateAddress.rejected, (state, action) => {
        state.updatedAddressStatus = STATUS.FAILED;
        state.updatedAddress = {};
        state.updatedAddressError = action.payload;
      });
  },
});

// Get All Addresses
export const addresses = (state) => state.addresses.addresses;
export const addressesStatus = (state) => state.addresses.addressesStatus;
export const addressesError = (state) => state.addresses.addressesError;

// Get Address
export const specificAddress = (state) => state.addresses.specificAddress;
export const specificAddressStatus = (state) =>
  state.addresses.specificAddressStatus;
export const specificAddressError = (state) =>
  state.addresses.specificAddressError;

//Add Address
export const createdAddress = (state) => state.addresses.createdAddress;
export const createdAddressStatus = (state) =>
  state.addresses.createdAddressStatus;
export const createdAddressError = (state) =>
  state.addresses.createdAddressError;

//Delete Address
export const deletedAddress = (state) => state.addresses.deletedAddress;
export const deletedAddressStatus = (state) =>
  state.addresses.deletedAddressStatus;
export const deletedAddressError = (state) =>
  state.addresses.deletedAddressError;

//Update Address
export const updatedAddress = (state) => state.addresses.updatedAddress;
export const updatedAddressStatus = (state) =>
  state.addresses.updatedAddressStatus;
export const updatedAddressError = (state) =>
  state.addresses.updatedAddressError;

export const { reset } = AddressesSlice.actions;

export default AddressesSlice.reducer;
