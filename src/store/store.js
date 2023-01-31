import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// Adding middlewares and combining them using compose method
const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));

// createStore with rootReducer and Middlewares - undefined is just optional syntax
export const store = createStore(rootReducer, undefined, composeEnhancers);
