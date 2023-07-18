import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
	id: string;
	quantity: number;
	price: number;
};

export type CartState = {
	isCartOpen: boolean;
	cartItems: CartItem[];
};

const addCartItem = (
	cartItems: CartItem[],
	productToAdd: CartItem
): CartItem[] => {
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
	cartItems: CartItem[],
	cartItemToRemove: CartItem
): CartItem[] => {
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
	cartItems: CartItem[],
	cartItemToClear: CartItem
): CartItem[] =>
	cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: CART_INITIAL_STATE,
	reducers: {
		addItemToCart: (state, action: PayloadAction<CartItem>) => {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart: (state, action: PayloadAction<CartItem>) => {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart: (state, action: PayloadAction<CartItem>) => {
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
