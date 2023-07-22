import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartItem, CartState } from "./cart.types";

export const selectCartReducer = (state: RootState) => {
	return state.cart;
};

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart: CartState) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart: CartState) => cart.isCartOpen
);

export const selectCartCount = createSelector(
	[selectCartItems],
	(cartItems: CartItem[]) =>
		cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	(cartItems: CartItem[]) =>
		cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		)
);
