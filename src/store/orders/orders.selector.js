import { createSelector } from "reselect";

export const selectOrders = (state) => state.orders;

export const selectOrderList = createSelector(
	[selectOrders],
	(orders) => orders.order
);

export const selectPaymentDetails = createSelector(
	[selectOrders],
	(orders) => orders.paymentDetails
);
