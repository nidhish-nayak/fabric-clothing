import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Orders, OrdersState, PaymentDetails } from "./orders.types";

const ORDERS_INITIAL_STATE: OrdersState = {
	order: [],
	paymentDetails: [],
};

export const ordersSlice = createSlice({
	name: "orders",
	initialState: ORDERS_INITIAL_STATE,
	reducers: {
		setOrder: (state, action: PayloadAction<Orders>) => {
			state.order.push(action.payload);
		},
		setPaymentDetails: (state, action: PayloadAction<PaymentDetails>) => {
			state.paymentDetails.push(action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setOrder, setPaymentDetails } = ordersSlice.actions;

export default ordersSlice.reducer;
