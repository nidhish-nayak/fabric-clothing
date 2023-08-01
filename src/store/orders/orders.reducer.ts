import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
	OrdersStateType,
	OrdersType,
	PaymentDetailsType,
} from "./orders.types";

const ORDERS_INITIAL_STATE: OrdersStateType = {
	order: [],
	paymentDetails: [],
};

export const ordersSlice = createSlice({
	name: "orders",
	initialState: ORDERS_INITIAL_STATE,
	reducers: {
		setOrder: (state, action: PayloadAction<OrdersType>) => {
			state.order.push(action.payload);
		},
		setPaymentDetails: (state, action: PayloadAction<PaymentDetailsType>) => {
			state.paymentDetails.push(action.payload);
		},
	},
});

export const { setOrder, setPaymentDetails } = ordersSlice.actions;

export default ordersSlice.reducer;
