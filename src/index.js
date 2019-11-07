import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css'; // Problematic
import './styles.scss';

// 2. Create a Mock Reducer
//    A reducer is a function that returns an object (simplest form)
//    Returned object represents the state tree
function reducer() {
  return {
    title: "Hello world! I'm in the Redux store!"
  };
}

// 1. Create the store.
const store = createStore(reducer); // Takes in a reducer

// 3. Wrap App in a provider
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
