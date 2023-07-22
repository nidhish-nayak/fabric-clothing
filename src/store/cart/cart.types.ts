export type CartItem = {
	id: string;
	quantity: number;
	price: number;
};

export type CartState = {
	isCartOpen: boolean;
	cartItems: CartItem[];
};
