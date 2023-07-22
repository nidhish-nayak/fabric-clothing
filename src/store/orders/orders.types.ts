export type Order = {
	price: number;
	imageUrl: string;
	name: string;
	id: number;
	quantity: number;
};

export type Orders = {
	order: Order[];
};

export type PaymentDetails = {
	payment: [string, string];
};

export type OrdersState = {
	order: Orders[];
	paymentDetails: PaymentDetails[];
};
