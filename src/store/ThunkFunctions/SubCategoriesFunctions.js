import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";


//Create Sub Category

export const createSubCategory = createAsyncThunk(
  "post/SubCategory",
  (formData, thunkAPI) => {
    let response = useInsertData(
      `/api/v1/subcategories`,
      formData,
      thunkAPI
    );
    return response;
  }
);


export const getSpecificSubCategory = createAsyncThunk(
  "get/SubCategory",
  (id, thunkAPI) => {
    let response = useGetData(
      `/api/v1/subcategories/${id}`,
      undefined,
      thunkAPI
    );
    return response;
  }
);

//Get All Sub Categories

export const getAllSubCategories = createAsyncThunk(
  "Get/SubCategory",
  (catId, thunkAPI) => {
    let response = useGetData(
      `/api/v1/categories/${catId}/subcategories`,
      undefined,
      thunkAPI
    );
    return response;
  }
);
