import {
  SET_SIDEBAR,
  ADD_MESSAGE,
} from 'src/common/redux/actions/chat';

const initialState = {
  status: false,
  channel: {
    id: 1,
    name: 'Général',
    messages: [],
  },
};

const chat = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIDEBAR: {
      return {
        ...state,
        status: action.status,
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        channel: {
          ...state.channel,
          messages: [...state.channel.messages, action.message],
        },
      };
    }
    default: return { ...state };
  }
};

export default chat;
