import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

// Blacklisting user since auth state listener holds the user since it may face issues on persist
const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Log middleware only in DEV instance - filter will send "logger" string to const middleware
const middleWares = [
    process.env.NODE_ENV !== "production" && logger,
    thunk,
].filter(Boolean);

const composeEnhancer =
    (process.env.NODE_ENV !== "production" &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

// Adding middlewares and combining them using compose method
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// createStore with rootReducer and Middlewares - undefined is just optional syntax
export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
