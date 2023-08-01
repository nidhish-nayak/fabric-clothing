import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartItemType, CartStateType } from "./cart.types";

export const selectCartReducer = (state: RootState) => {
	return state.cart;
};

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart: CartStateType) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart: CartStateType) => cart.isCartOpen
);

export const selectCartCount = createSelector(
	[selectCartItems],
	(cartItems: CartItemType[]) =>
		cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	(cartItems: CartItemType[]) =>
		cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		)
);
