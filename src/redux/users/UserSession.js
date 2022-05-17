const LOGIN = 'session/LOGIN';

const initialState = {
  name: 'Richard',
  token: 'xxxxx',
};

export const sessionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
