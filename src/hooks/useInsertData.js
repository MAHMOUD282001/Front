import baseUrl from "../api/baseUrl";

const useInsertDataWithImages = async (url, parmas, thunkAPI) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await baseUrl.post(url, parmas, config);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

const useInsertData = async (url, parmas, thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await baseUrl.post(url, parmas, config);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export { useInsertData, useInsertDataWithImages };
