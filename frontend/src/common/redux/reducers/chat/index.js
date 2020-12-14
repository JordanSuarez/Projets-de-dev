import {
  SET_SIDEBAR,
  SET_CHANNEL,
} from 'src/common/redux/actions/chat';

const initialState = {
  status: false,
  channelId: null,
};

const chat = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIDEBAR: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_CHANNEL: {
      return {
        ...state,
        channelId: action.channelId,
      };
    }
    default: return { ...state };
  }
};

export default chat;
