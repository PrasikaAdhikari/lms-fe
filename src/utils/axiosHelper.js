import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";

//Axios helper is the connecting layer.
//Without axios helper the code would run but would be messier

export const apiProcessor = async ({ method, data, url, isPrivate }) => {
  try {
    let response = await axios({
      method,
      url,
      data,
      headers: isPrivate
        ? {
            Authorization: localStorage.getItem("accessToken"),
          }
        : {},
    });

    return response.data;
  } catch (err) {
    return {
      status: false,
      message: err?.response?.data?.message || err.message,
    };
  }
};
