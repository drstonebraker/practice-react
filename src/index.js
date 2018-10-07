import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/reset.scss';
import './styles/form-reset.scss';
import './styles/base.scss';

import { configureStore } from './store/store';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), 
  document.getElementById('root')
);
// registerServiceWorker();
