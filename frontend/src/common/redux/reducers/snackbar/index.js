import {
  SHOW_SNACKBAR, HIDE_SNACKBAR,
} from 'src/common/redux/actions/snackbar';

const initialState = {
  isOpen: false,
  content: '',
  title: '',
  severity: '',
};

const snackbar = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        isOpen: true,
        content: action.content,
        title: action.title,
        severity: action.severity,
      };
    case HIDE_SNACKBAR:
      return {
        ...state,
        isOpen: false,
        content: '',
        title: '',
        severity: '',
      };

    default:
      return { ...state };
  }
};

export default snackbar;
