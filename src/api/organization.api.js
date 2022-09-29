import axios from 'axios';
import { API_URL } from './config';

const API = axios.create({
    baseURL: API_URL + '/organization',
    // withCredentials: true
});

export const newOrganization = (organization) => API.post("/register", organization);
export const getOrganizationByID = (organizationID) => API.get(`/${organizationID}`);