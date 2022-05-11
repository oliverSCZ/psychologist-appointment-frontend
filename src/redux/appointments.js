const ENDPOINT = '/bookings';
const HOST_URL = 'http://127.0.0.1:3001';
const API_URL = `${HOST_URL}${ENDPOINT}`;

const LOAD_GREETING = 'greetings/LOAD_GREETING';

const initialState = {};

export const loadGreeting = (payload) => ({
  type: LOAD_GREETING,
  payload,
});

export const getGreetingFromApi = async () => {
  const response = await fetch(API_URL);
  const greeting = await response.json();
  return greeting;
};

export const getGreeting = () => async (dispatch) => {
  const greetingMessage = getGreetingFromApi();
  greetingMessage.then((message) => {
    dispatch(loadGreeting({ ...message }));
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
