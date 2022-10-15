import axios from "axios";
import { API_URL } from "./config";

const API = axios.create({
  baseURL: API_URL + "/requester",
  // withCredentials: true
});

export const newRequest= (newRequest) => API.post("/createRequest", newRequest);
export const getAllRequests = () => API.get("/allRequests");
export const getOneRequest = (requestId) => API.get(`/view/request/${requestId}`);
export const requesterProfile = (requestId) => API.get(`/profile/${requestId}`);
export const updateProfile = (userId, user) => API.put(`/updateProfile/${userId}`, user);
export const updatePassword = (userId, user) => API.put(`/updatePassword/${userId}`, user);
export const myRequests = (userId) => API.get(`/my/requests/${userId}`);
export const removeRequest = (requestId) => API.delete(`/delete/${requestId}`);
export const getUserId = (userId) => API.get(`/${userId}`);
