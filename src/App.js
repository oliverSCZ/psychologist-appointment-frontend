import React from 'react';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Header from './components/Header';
import PsychologistList from './components/PsychologistList';
import AddForm from './components/AddForm';
import StateList from './components/StateList'
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <PsychologistList />
        <AddForm />
        <StateList />
      </div>
    </Provider>
  );
}

export default App;