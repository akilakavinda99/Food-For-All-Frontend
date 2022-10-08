import axios from 'axios';
import { API_URL } from './config';

const API = axios.create({
    baseURL: API_URL + '/fund',
    // withCredentials: true
});

export const newFund = (organization) => API.post("/create", organization);
export const getFundByOrganizationAndStatus = (organizationID, status) => API.get(`/${organizationID}/status/${status}`);
export const getFundByID = (fundID) => API.get(`/${fundID}`);
export const getFundByStatus = (status) => API.get(`/status/${status}`);
export const getNFunds = (organizationId, limit) => API.get(`/${organizationId}/limit/${limit}`);
export const updateFund = (fundID, fund) => API.put(`/update/${fundID}`, fund);
export const removeFund = (fundID) => API.put(`/remove/${fundID}`);
export const donateFund = (fundID, donation) => API.post(`/donateFund/${fundID}`, donation);