export type CartItem = {
	id: number;
	quantity: number;
	price: number;
};

export type CartState = {
	isCartOpen: boolean;
	cartItems: CartItem[];
};
