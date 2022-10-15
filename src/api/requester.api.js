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
export const updateProfile = (requestId) => API.get(`/updateProfile/${requestId}`);
export const myRequests = (requesterId) => API.get(`/my/requests/${requesterId}`);
export const getUserId = (userId) => API.get(`/${userId}`);
