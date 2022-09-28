import axios from 'axios';
import { API_URL } from './config';

const API = axios.create({
    baseURL: API_URL + '/fund',
    // withCredentials: true
});

export const newFund = (organization) => API.post("/create", organization);
export const getFundByOrganizationAndStatus = (organizationID, status) => API.get(`/${organizationID}/status/${status}`);