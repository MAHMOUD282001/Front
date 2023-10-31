import baseUrl from "../utils/baseUrl";

const useUpdateDataContainsImages = async (url, parmas, thunkAPI) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await baseUrl.put(
      url,
      parmas,
      url === "/api/v1/auth/resetPassword" ? "" : config
    );
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

const useUpdateData = async (url, parmas, thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await baseUrl.put(url, parmas, config);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export { useUpdateData, useUpdateDataContainsImages };
