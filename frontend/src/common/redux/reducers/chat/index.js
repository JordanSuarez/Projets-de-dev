import {
  SET_CHAT,
  ADD_MESSAGE,
  SAVE_MESSAGES,
} from 'src/common/redux/actions/chat';

const initialState = {
  status: false,
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
        messages: action.messages,
      };
    }
    default: return { ...state };
  }
};

export default chat;
