import { createSelector } from "reselect";
import { RootState } from "../store";
import { OrdersStateType } from "./orders.types";

export const selectOrders = (state: RootState) => state.orders;

export const selectOrderList = createSelector(
	[selectOrders],
	(orders: OrdersStateType) => orders.order
);

export const selectPaymentDetails = createSelector(
	[selectOrders],
	(orders: OrdersStateType) => orders.paymentDetails
);
