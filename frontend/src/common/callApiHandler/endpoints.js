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
  TAGS,
  PRIVATE_PROFILE,
  ME,
  LIKES,
  CONNECTED,
  CHANNELS,
  MESSAGES,
  PRIVATE_PROFILE_LIKES,
  PROFILE_LIKES,
  LIKEPROJECT,
  LIKE,
  DISLIKE,
  ILIKE,
  IDISLIKE,
  VOTE,
  PRIVATE_PROFILE_PROJECTS_LIKES,
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
      [PRIVATE_PROFILE_LIKES]: `${USERS}/${ME}/${LIKES}`,
      [PRIVATE_PROFILE_PROJECTS_LIKES]: `${USERS}/${ME}/${LIKES}-${PROJECTS}`,
      [PROFILE_LIKES]: (meta) => `${USERS}/${meta}/${LIKES}`,
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
  [LIKEPROJECT]: {
    [POST]: {
      [ILIKE]: (meta) => `${PROJECTS}/${meta}/${VOTE}/${LIKE}`,
      [IDISLIKE]: (meta) => `${PROJECTS}/${meta}/${VOTE}/${DISLIKE}`,
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
      [ALL]: (meta, offset) => `${MESSAGES}/${meta}${offset}`,
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
