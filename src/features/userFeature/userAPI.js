import { apiProcessor } from "../../utils/axiosHelper";
import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";
// create transaction
export const postUser = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth/register`,
    data: obj,
  });
};

// // update transaction
// export const updateTransaction = async (obj, id) => {
//   return apiProcessor({
//     method: "patch",
//     url: `${apiUrl}/transactions/${id}`,
//     data: obj,
//     isPrivate: true,
//   });
// };

// //delete transaction
// export const deleteTransaction = async (id) => {
//   return apiProcessor({
//     method: "delete",
//     url: `${apiUrl}/transactions/${id}`,
//     isPrivate: true,
//   });
// };

// // get user detail
// export const getUserDetail = async () => {
//   return apiProcessor({
//     method: "get",
//     url: `${apiUrl}/auth/user`,
//     isPrivate: true,
//   });
// };

// // get dashboard metrics
// export const getDashboardMetrics = async () => {
//   return apiProcessor({
//     method: "get",
//     url: `${apiUrl}/dashboard`,
//     isPrivate: true,
//   });
// };
