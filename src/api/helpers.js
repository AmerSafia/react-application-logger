import axios from "axios";
export const apiBaseUrl = process.env.REACT_APP_API_URL;

export const getUnAuthenticatedAxios = () => ( axios.create({ baseURL: apiBaseUrl }))

export const getDataFromResponse = (response) => response.data;

export const getDataFromError = error => error