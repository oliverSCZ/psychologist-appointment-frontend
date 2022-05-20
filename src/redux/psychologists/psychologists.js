import { PSYCHOLOGISTS_ENDPOINT } from '../../endpoints';

const LOAD_PSYCHOLOGISTS = 'psychologists/LOAD_PSYCHOLOGISTS';
const ADD_PSYCHOLOGIST = 'psychologists/ADD_PSYCHOLOGIST';

const initialState = [];

export const loadPsychologists = (payload) => ({
  type: LOAD_PSYCHOLOGISTS,
  payload,
});

const addPsychologists = (payload) => ({
  type: ADD_PSYCHOLOGIST,
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
    psychologist.forEach((psychologist) => {
      dispatch(loadPsychologists(psychologist));
    });
  });
};

export const savePsychologistToApi = (psychologist) => async (dispatch) => {
  await fetch(PSYCHOLOGISTS_ENDPOINT, {
    method: 'post',
    body: JSON.stringify({
      ...psychologist,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(dispatch(addPsychologists(psychologist)));
};

const psychologistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PSYCHOLOGISTS:
      return [...state, action.payload];
    case ADD_PSYCHOLOGIST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default psychologistsReducer;
