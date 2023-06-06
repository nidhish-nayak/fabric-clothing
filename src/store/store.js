// import logger from 'redux-logger';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";
import { rootReducer } from "./root-reducer";

// Creating our own middleware [logger]
const loggerMiddleware = (store) => (next) => (action) => {
    // In case actions received with no types (Redux Thunk)
    if (!action.type) {
        return next(action);
    }
    console.group("Logger Output: ");
    console.log("Type: ", action.type);
    console.log("Payload: ", action.payload);
    console.log("Current State: ", store.getState());

    next(action);

    // Next state will be only available post running the reducer. Hence, printing the state after next
    console.table("Next State: ", store.getState());
    console.groupEnd();
};

// Blacklisting user since auth state listener holds the user since it may face issues on persist
const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Adding middlewares and combining them using compose method
const middleWares = [loggerMiddleware];
const composeEnhancers = compose(applyMiddleware(...middleWares));

// createStore with rootReducer and Middlewares - undefined is just optional syntax
export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
