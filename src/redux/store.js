import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [logger];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

export default store;
