import { createSlice } from "@reduxjs/toolkit";

const ORDERS_INITIAL_STATE = {
	order: [],
	paymentDetails: [],
};

export const ordersSlice = createSlice({
	name: "orders",
	initialState: ORDERS_INITIAL_STATE,
	reducers: {
		setOrder: (state, action) => {
			state.order.push(action.payload);
		},
		setPaymentDetails: (state, action) => {
			state.paymentDetails.push(action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setOrder, setPaymentDetails } = ordersSlice.actions;

export default ordersSlice.reducer;
