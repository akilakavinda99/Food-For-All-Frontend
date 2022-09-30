import axios from "axios";
import { API_URL } from "./config";

const API = axios.create({
  baseURL: API_URL + "/donator",
  // withCredentials: true
});

export const newDonation = (donation) => API.post("/createDonation", donation);
export const newRequest = (request) => API.post("/sendRequest", request);
export const getRequests = (donationID) =>
  API.get(`/getPendingRequests/${donationID}`);
export const acceptDonationRequest = (requestID) =>
  API.put(`/acceptRequest/${requestID}`);
export const rejectDonationRequest = (requestID) =>
  API.put(`/rejectRequest/${requestID}`);
export const getPendingDonations = (userId) =>
  API.get(`/getPendingDonations/${userId}`);

export const getRejectedDonations = (userId) =>
  API.get(`/getRejectedDonations/${userId}`);

export const markDonationAsCompleted = (donationID) =>
  API.put(`/markAsCompleted/${donationID}`);

export const getOngoingDonations = (donationID) =>
  API.put(`/getOngoingDonations/${donationID}`);
