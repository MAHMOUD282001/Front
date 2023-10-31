import baseUrl from "../utils/baseUrl";

const useGetData = async (url, params, thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await baseUrl.get(url, config);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export default useGetData;
