import { combineReducers } from 'redux';
import psychologistReducer from './psychologistReducer';

export default combineReducers({
    psychologist: psychologistReducer
});