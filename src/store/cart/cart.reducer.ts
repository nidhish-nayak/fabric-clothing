import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, CartStateType } from "./cart.types";

// Helper functions

const addCartItem = (
	cartItems: CartItemType[],
	productToAdd: CartItemType
): CartItemType[] => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
	cartItems: CartItemType[],
	cartItemToRemove: CartItemType
): CartItemType[] => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem && existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (
	cartItems: CartItemType[],
	cartItemToClear: CartItemType
): CartItemType[] =>
	cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// Reducer Code

export const CART_INITIAL_STATE: CartStateType = {
	isCartOpen: false,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: CART_INITIAL_STATE,
	reducers: {
		addItemToCart: (state, action: PayloadAction<CartItemType>) => {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart: (state, action: PayloadAction<CartItemType>) => {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart: (state, action: PayloadAction<CartItemType>) => {
			state.cartItems = clearCartItem(state.cartItems, action.payload);
		},
		setIsCartOpen: (state, action: PayloadAction<boolean>) => {
			state.isCartOpen = action.payload;
		},
	},
});

export const {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
	setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
