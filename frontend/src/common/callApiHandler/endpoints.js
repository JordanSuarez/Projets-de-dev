import {
  GET,
  POST,
  PATCH,
  DELETE,
  USERS,
  PROJECTS,
  CONTACT,
  LOGIN,
  LOGOUT,
  REGISTER,
  EDIT,
  NEW,
  ONE,
  ALL,
  PRIVATE_PROFILE,
} from './constants';
import { apiUrl } from './urlHandler';

const endpoints = {
  // Projects routes
  [PROJECTS]: {
    [GET]: {
      [ALL]: `${PROJECTS}`,
      [ONE]: (meta) => `${PROJECTS}/${meta}`,
    },
    [POST]: {
      [ONE]: `${PROJECTS}/${NEW}`,
    },
    [PATCH]: {
      [ONE]: (meta) => `${PROJECTS}/${meta}/${EDIT}`,
    },
    [DELETE]: {
      [ONE]: (meta) => `${PROJECTS}/${meta}/${DELETE}`,
    },
  },
  // User routes
  [USERS]: {
    [POST]: {
      [LOGIN]: `${USERS}/${LOGIN}`,
      [LOGOUT]: `${USERS}/${LOGOUT}`,
      [REGISTER]: `${USERS}/${REGISTER}`,
    },
    [GET]: {
      [ALL]: `${USERS}`,
      [ONE]: (meta) => `${USERS}/${meta}`,
      [PRIVATE_PROFILE]: `${USERS}/me`,
    },
    [DELETE]: {
      [ONE]: (meta) => `${USERS}/${meta}/${DELETE}`,
    },
    [PATCH]: {
      [PRIVATE_PROFILE]: `${USERS}/myprofile/${EDIT}`,
    },
  },
  [CONTACT]: {
    [POST]: {
      [CONTACT]: `${CONTACT}`,
    },
  },
};

// get api endpoint from endoints{} list
// eslint-disable-next-line import/prefer-default-export
export const getEndpoint = (resource, method, type, meta) => {
  try {
    const endpoint = endpoints[resource][method][type];

    return meta ? `/${endpoint(meta)}` : `/${endpoint}`;
  }
  catch (error) {
    return apiUrl;
  }
};
