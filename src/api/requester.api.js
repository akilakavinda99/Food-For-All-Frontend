import axios from "axios";
import { API_URL } from "./config";

const API = axios.create({
  baseURL: API_URL + "/requester",
  // withCredentials: true
});

export const newRequest= (newRequest) => API.post("/createRequest", newRequest);
export const getAllRequests = () => API.get("/allRequests");
export const getUserId = (userId) => API.get(`/${userId}`);
