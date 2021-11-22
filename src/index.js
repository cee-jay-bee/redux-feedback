import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const data = (state = [], action) => {
    console.log('hello world from a reducer! Action:', action);
    if (action.type === 'ADD_DATA'){
        return [...state, action.payload];
    }
    if (action.type === 'EMPTY'){
        return [];
    }
    if (action.type === 'REMOVE_DATA'){
      return state.slice(0, -1);
    }
    return state;
}
  
  // a store
  const storeInstance = createStore(
    combineReducers(
      {
        data
      }
    ),
    applyMiddleware(
      logger
    )
  );

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
