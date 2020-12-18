import {
  SET_CHAT,
  ADD_MESSAGE,
  SAVE_MESSAGES,
  GET_MESSAGES,
} from 'src/common/redux/actions/chat';

const initialState = {
  status: false,
  loading: true,
  messages: [],
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
    default: return { ...state };
  }
};

export default chat;
