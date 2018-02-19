import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { WorkoutGenerator } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  WorkoutGenerator
)


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, 
  
  document.getElementById('root'));
registerServiceWorker();
