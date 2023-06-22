// import {
//   applyMiddleware,
//   compose,
//   legacy_createStore as createStore,
// } from "redux";
// import logger from "redux-logger";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
// import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.reducer";
import categoriesReducer from "./categories/categoriesSlice";
import userReducer from "./user/userSlice";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [
//   process.env.NODE_ENV !== "production" && logger,
//   thunk, // Added Redux Thunk as middleware
// ].filter(Boolean);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
  // middleware: middleWares,
});

// export const persistor = persistStore(store);
