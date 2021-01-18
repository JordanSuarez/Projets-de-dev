import axios from 'axios';
import { getToken } from 'src/common/authentication/authProvider';

// Get variable env from .env file
const { REACT_APP_API_PROTOCOL } = process.env;
const { REACT_APP_API_HOST } = process.env;
const { REACT_APP_API_PORT } = process.env;

// BASE URL of api, from .env file
// If the site is launched on the server remove :${REACT_APP_API_PORT}
// Local: `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_HOST}:${REACT_APP_API_PORT}/api`;
export const apiUrl = `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_HOST}/api`;

/**
 * Call API with all axios instance method (POST, GET, PUT, PATCH, DELETE)
 * Data is empty for GET and DELETE request
 * @param url = url from getEndpoint() method
 * @param method = one of require method (POST, GET, DELETE...)
 * @param data = Data as object like this = {email: userEmail, password: userPassword}
 * @returns Promise, so we can use .then and .catch after callApi
 */
export const callApi = (url, method, data = {}) => (
  axios[method](
    `${apiUrl}${url}`,
    data,
    {
      headers:
      {
        Authorization: `Bearer ${getToken()}` || null,
      },
    },
  ).then((response) => response));
