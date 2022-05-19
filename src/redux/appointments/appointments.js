import APPOINTMENTS_ENDPOINT from '../../endpoints';

const LOAD_APPOINTMENT = 'appointments/LOAD_APPOINTMENT';

const initialState = {};

export const loadAppointment = (payload) => ({
  type: LOAD_APPOINTMENT,
  payload,
});

export const getAppointmentFromApi = async () => {
  const response = await fetch(APPOINTMENTS_ENDPOINT);
  const appointment = await response.json();
  return appointment;
};

export const getAppointment = () => async (dispatch) => {
  const appointments = getAppointmentFromApi();
  appointments.then((appointment) => {
    dispatch(loadAppointment({ ...appointment }));
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APPOINTMENT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
