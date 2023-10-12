import baseUrl from "../api/baseUrl";

const useGetData = async (url, parmas, thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await baseUrl.get(url, parmas, config);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export default useGetData;
