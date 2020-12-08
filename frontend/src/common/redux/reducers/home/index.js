const initialState = {
  loading: true,
};

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    // case SHOW_PROJECT_BY_ID:
    //   return {
    //     ...state,
    //   };
    default:
      return { ...state };
  }
};

export default home;
