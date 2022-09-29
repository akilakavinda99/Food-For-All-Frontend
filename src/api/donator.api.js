import axios from "axios";
import { API_URL } from "./config";

const API = axios.create({
  baseURL: API_URL + "/donator",
  // withCredentials: true
});

export const newDonation = (donation) => API.post("/createDonation", donation);
