const UPDATE_HEADER_INFO = 'psychologists/UPDATE_HEADER_INFO';

const initialState = {
  heading: 'OUR PSYCHOLOGISTS',
  subHeading: 'Ready to get you the help you need.',
};

export const updateHeader = (payload) => ({
  type: UPDATE_HEADER_INFO,
  payload,
});

const headerInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HEADER_INFO: {
      return {
        ...state,
        pageHeaderInfo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default headerInfoReducer;
