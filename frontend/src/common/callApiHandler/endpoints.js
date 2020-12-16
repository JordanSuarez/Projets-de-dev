import {
  GET,
  POST,
  PATCH,
  DELETE,
  USERS,
  PROJECTS,
  COMMENT,
  CONTACT,
  LOGIN,
  REGISTER,
  EDIT,
  NEW,
  ONE,
  ALL,
  TWELVE,
  LATEST,
  TAGS,
  PRIVATE_PROFILE,
  ME,
  CONNECTED,
  CHANNELS,
  MESSAGES,
} from './constants';
import { apiUrl } from './urlHandler';

const endpoints = {
  // Projects routes
  [PROJECTS]: {
    [GET]: {
      [ALL]: `${PROJECTS}`,
      [TWELVE]: (meta, offset) => `${PROJECTS}/${meta}${offset}`,
      [ONE]: (meta) => `${PROJECTS}/${meta}`,
    },
    [POST]: {
      [ONE]: `${PROJECTS}/${NEW}`,
    },
    [PATCH]: {
      [ONE]: (meta) => `${PROJECTS}/${meta}/${EDIT}`,
    },
    [DELETE]: {
      [ONE]: (meta) => `${PROJECTS}/${meta}/${DELETE}-my-project`,
    },
  },
  // User routes
  [USERS]: {
    [POST]: {
      [LOGIN]: `${USERS}/${LOGIN}`,
      [REGISTER]: `${USERS}/${REGISTER}`,
      [CONNECTED]: `${USERS}/${CONNECTED}`,
    },
    [GET]: {
      [ALL]: `${USERS}`,
      [ONE]: (meta) => `${USERS}/${meta}`,
      [PRIVATE_PROFILE]: `${USERS}/${ME}`,
    },
    [DELETE]: {
      [PRIVATE_PROFILE]: `${USERS}/${ME}/${DELETE}`,
    },
    [PATCH]: {
      [PRIVATE_PROFILE]: `${USERS}/${ME}/${EDIT}`,
    },
  },
  [COMMENT]: {
    [POST]: {
      [ONE]: `${COMMENT}/add`,
    },
    [PATCH]: {
      [ONE]: (meta) => `${COMMENT}/${meta}/${EDIT}`,
    },
    [DELETE]: {
      [ONE]: (meta) => `${COMMENT}/${meta}/${DELETE}`,
    },
  },
  [CONTACT]: {
    [POST]: {
      [CONTACT]: `${CONTACT}`,
    },
  },
  [TAGS]: {
    [GET]: {
      [ALL]: `${TAGS}`,
    },
  },
  [CHANNELS]: {
    [GET]: {
      [ALL]: `${CHANNELS}`,
      [ONE]: (meta) => `${CHANNELS}/${meta}`,
    },
  },
  [MESSAGES]: {
    [GET]: {
      [ALL]: `${MESSAGES}`,
    },
  },
};

// get api endpoint from endoints{} list
// eslint-disable-next-line import/prefer-default-export
export const getEndpoint = (resource, method, type, meta, offset) => {
  try {
    const endpoint = endpoints[resource][method][type];
    if (offset && meta) {
      return (`/${endpoint(meta, offset)}`);
    }
    return meta ? `/${endpoint(meta)}` : `/${endpoint}`;
  }
  catch (error) {
    return apiUrl;
  }
};
