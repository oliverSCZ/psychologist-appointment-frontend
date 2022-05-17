import { PSYCHOLOGISTS_ENDPOINT } from '../../endpoints';

const LOAD_PSYCHOLOGISTS = 'psychologists/LOAD_PSYCHOLOGISTS';

const initialState = {};

export const loadPsychologists = (payload) => ({
  type: LOAD_PSYCHOLOGISTS,
  payload,
});

const getPyschologistsFromApi = async () => {
  const response = await fetch(PSYCHOLOGISTS_ENDPOINT);
  const psychologists = await response.json();
  return psychologists;
};

export const getPsychologists = () => async (dispatch) => {
  const psychologists = getPyschologistsFromApi();
  psychologists.then((psychologist) => {
    dispatch(loadPsychologists({ ...psychologist }));
  });
};

const psychologistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PSYCHOLOGISTS:
      return action.payload;
    default:
      return state;
  }
};

export default psychologistsReducer;
