import { createSelector } from "reselect";
import { OrdersSelector, OrdersState } from "./orders.types";

export const selectOrders = (state: OrdersSelector) => state.orders;

export const selectOrderList = createSelector(
	[selectOrders],
	(orders: OrdersState) => orders.order
);

export const selectPaymentDetails = createSelector(
	[selectOrders],
	(orders: OrdersState) => orders.paymentDetails
);
