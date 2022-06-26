import { getDataFromError, getDataFromResponse, getUnAuthenticatedAxios } from './helpers';
export const auditLogApiEndpoints = {
    list: () =>
        getUnAuthenticatedAxios().get(`/a2fbc23e-069e-4ba5-954c-cd910986f40f`)
        .then(getDataFromResponse)
        .catch(getDataFromError),
};
