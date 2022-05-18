const UPDATE_PAGE_INFO = 'UPDATE_PAGE_INFO';

const initialState = {
  heading: 'OUR PSYCHOLOGISTS',
  subHeading: 'Ready to get you the help you need.',
};

export const updateHeader = (payload) => ({
  type: UPDATE_PAGE_INFO,
  payload,
});

const headerInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAGE_INFO: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default headerInfoReducer;
