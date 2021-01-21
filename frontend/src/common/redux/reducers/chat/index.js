import {
  SET_CHAT,
  ADD_MESSAGE,
  SAVE_MESSAGES,
  GET_MESSAGES,
  SAVE_USER_SELECTED,
} from 'src/common/redux/actions/chat';

const initialState = {
  status: 'chatClosed',
  loading: true,
  messages: [],
  profileSelected: {},
};

const chat = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CHAT: {
      return {
        ...state,
        status: action.status,
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    }
    case SAVE_MESSAGES: {
      return {
        ...state,
        loading: false,
        messages: action.messages,
      };
    }
    case GET_MESSAGES: {
      return {
        ...state,
        loading: true,
      };
    }
    case SAVE_USER_SELECTED: {
      return {
        ...state,
        profileSelected: action.profile,
      };
    }
    default: return { ...state };
  }
};

export default chat;
