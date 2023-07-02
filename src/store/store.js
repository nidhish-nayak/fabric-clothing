import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose your storage engine
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

// Create the persist config
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "orders"],
};

// Create the persisted reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
	// other configuration options...
});

export const persistor = persistStore(store);
