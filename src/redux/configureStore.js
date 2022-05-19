import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import psychologistsReducer from './psychologists/psychologists';
import headerInfoReducer from './pageHeadingInfo';

const reducer = combineReducers({
  psychologistsReducer,
  headerInfoReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
