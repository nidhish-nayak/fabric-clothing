import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// Creating our own middleware [logger]
const loggerMiddleware = (store) => (next) => (action) => {
    // In case actions received with no types (Redux Thunk)
    if (!action.type) {
        return next(action);
    }
    console.log('Logger - type: ', action.type);
    console.log('Logger - payload: ', action.payload);
    console.log('Logger - currentState: ', store.getState());

    next(action);

    // Next state will be only available post running the reducer. Hence, printing the state after next
    console.log('Logger - next state: ', store.getState());
}

// Adding middlewares and combining them using compose method
const middleWares = [loggerMiddleware];
const composeEnhancers = compose(applyMiddleware(...middleWares));

// createStore with rootReducer and Middlewares - undefined is just optional syntax
export const store = createStore(rootReducer, undefined, composeEnhancers);
