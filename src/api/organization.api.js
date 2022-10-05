import axios from 'axios';
import { API_URL } from './config';

const API = axios.create({
    baseURL: API_URL + '/organization',
    // withCredentials: true
});

export const newOrganization = (organization) => API.post("/register", organization);
export const getOrganizationByID = (organizationID) => API.get(`/${organizationID}`);
export const changeOrganizationPassword = (organizationID, newpassword) => API.put(`/update/changePassword/${organizationID}`, newpassword);
export const updateOrganization = (organizationID, organization) => API.put(`/update/${organizationID}`, organization);
export const updateOrganizationBoard = (organizationID, organization) => API.put(`/update/board/${organizationID}`, organization);
export const getOrgLatestContribution = (organizationID, limit) => API.get(`/${organizationID}/latest/${limit}`);
export const getOrgDashSummary = (organizationID) => API.get(`/summary/${organizationID}`);
export const getContributionChart = (organizationID) => API.get(`/contributionChart/${organizationID}`);
export const getReport = (organizationID, month) => API.get(`/${organizationID}/report/${month}`);