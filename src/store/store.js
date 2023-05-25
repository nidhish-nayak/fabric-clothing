import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// Creating our own middleware [logger]
const loggerMiddleware = (store) => (next) => (action) => {
    // In case actions received with no types (Redux Thunk)
    if (!action.type) {
        return next(action);
    }
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState', store.getState());

    next(action);

    // Next state will be only available post running the reducer. Hence, printing the state after next
    console.log('next state: ', store.getState());
}

// Adding middlewares and combining them using compose method
// const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...loggerMiddleware));

// createStore with rootReducer and Middlewares - undefined is just optional syntax
export const store = createStore(rootReducer, undefined, composeEnhancers);
