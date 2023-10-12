import baseUrl from "../api/baseUrl";

const useDeleteData = async (url, parmas, thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await baseUrl.delete(url, config, parmas);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export default useDeleteData;
