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
export const acceptDonationRequest = (requestID, reqdata) =>
  API.put(`/acceptRequest/${requestID}`, reqdata);
export const rejectDonationRequest = (requestID, reqdata) =>
  API.put(`/rejectRequest/${requestID}`, reqdata);
export const getPendingDonations = (userId) =>
  API.get(`/getPendingDonations/${userId}`);

export const getRejectedDonations = (userId) =>
  API.get(`/getRejectedDonations/${userId}`);

export const markDonationAsCompleted = (donationID) =>
  API.put(`/markAsCompleted/${donationID}`);

export const getOngoingDonations = (donationID) =>
  API.get(`/getOngoingDonations/${donationID}`);

export const getOneDonation = (donationID) =>
  API.get(`/getOneDonation/${donationID}`);

export const getAllDonations = () => API.get(`/getDonations`);

export const getApprovedRequests = (donationID) =>
  API.get(`/getApprovedRequests/${donationID}`);

export const getUserDonations = (userID) =>
  API.get(`/getUserDonations/${userID}`);
