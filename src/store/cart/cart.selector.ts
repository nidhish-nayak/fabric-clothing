import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

type CartSelector = {
	// state: RootState; since root state is imported in utils/hooks/hooks.ts
	cart: CartState;
};

export const selectCartReducer = (state: CartSelector) => {
	return state.cart;
};

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	)
);
