export type OrdersType = {
	price: number;
	imageUrl?: string;
	name?: string;
	id: number;
	quantity?: number;
}[];

export type PaymentDetailsType = {
	status: string;
};

export type OrdersStateType = {
	order: OrdersType[];
	paymentDetails: PaymentDetailsType[];
};
