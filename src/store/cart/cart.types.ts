export type CartItemType = {
	id: number;
	name?: string;
	quantity?: number;
	price: number;
	imageUrl?: string;
};

export type CartStateType = {
	isCartOpen: boolean;
	cartItems: CartItemType[];
};
