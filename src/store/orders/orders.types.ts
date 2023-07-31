export type Orders = {
	price: number;
	imageUrl?: string;
	name?: string;
	id: number;
	quantity: number;
}[];

export type PaymentDetails = {
	method: string;
	status: string;
};

export type OrdersState = {
	order: Orders[];
	paymentDetails: PaymentDetails[];
};
