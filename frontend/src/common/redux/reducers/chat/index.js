import {
  SET_SIDEBAR,
  SET_CHANNEL,
  SAVE_CHANNELS,
  ADD_MESSAGE,
} from 'src/common/redux/actions/chat';

const initialState = {
  status: false,
  channel: {
    id: null,
    name: '',
    messages: [],
  },
  channels: [],
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
        channel: {
          id: action.channel.id,
          name: action.channel.name,
          messages: state.channel.messages,
        },
      };
    }
    case SAVE_CHANNELS: {
      return {
        ...state,
        channels: action.channels,
      };
    }
    case ADD_MESSAGE: {
      console.log(state.channel)
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
