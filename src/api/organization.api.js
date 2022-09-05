import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8070/organization',
    // withCredentials: true
});

export const newOrganization = (organization) => API.post("/register", organization);