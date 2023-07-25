import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose your storage engine
import thunk from "redux-thunk";
import { RootReducer, rootReducer } from "./root-reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "orders"],
};

const persistedReducer = persistReducer<RootReducer>(
	persistConfig,
	rootReducer
);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
	// other configuration options...
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
