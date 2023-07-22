import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import categoriesReducer from "./categories/categories.reducer";
import ordersReducer from "./orders/orders.reducer";
import userReducer from "./user/user.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
	orders: ordersReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
