import { createSelector } from "reselect";
import { RootState } from "../store";
import { OrdersState } from "./orders.types";

export const selectOrders = (state: RootState) => state.orders;

export const selectOrderList = createSelector(
	[selectOrders],
	(orders: OrdersState) => orders.order
);

export const selectPaymentDetails = createSelector(
	[selectOrders],
	(orders: OrdersState) => orders.paymentDetails
);
