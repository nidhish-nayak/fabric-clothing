import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import { CartItemType } from "../../store/cart/cart.types";
import { setOrder, setPaymentDetails } from "../../store/orders/orders.reducer";
import { userSelector } from "../../store/user/user.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {
	const dispatch = useDispatch();
	const [paymentInProgress, setPaymentInProgress] = useState(false);
	const cartTotal = useSelector(selectCartTotal);
	const currentUser = useSelector(userSelector);
	const cartItems: CartItemType[] = useSelector(selectCartItems);

	const setUserOrder = () => {
		dispatch(setOrder(cartItems));
	};

	const setUserPayment = (method: string, status: string) => {
		dispatch(setPaymentDetails({ method, status }));
	};

	const paymentHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setPaymentInProgress(true);

		try {
			const API_URL =
				process.env.NODE_ENV === "production"
					? process.env.NODE_API_URL
					: "http://localhost:4000/";
			const orderUrl = `${API_URL}orders`;

			const response = await axios.get(orderUrl, {
				params: {
					price: cartTotal * 100,
				},
			});

			const { data } = response;
			const paymentUrl = `${API_URL}orders/${data.id}/payments`;

			const options = {
				key: "rzp_test_Sjuckvh3PaY68A",
				amount: cartTotal * 100,
				currency: "INR",
				name: "Fabric Clothing",
				description: "Finest quality clothing apparel",
				image: currentUser?.photoURL || null,
				order_id: data.id,

				handler: async function () {
					const payment = await axios.get(paymentUrl, {
						params: {
							orderId: data.id,
						},
					});

					console.log(payment);
					const myPaymentStatus = payment.data.items[0]?.status;
					if (myPaymentStatus) {
						setUserOrder();
					} else {
						console.log("PAYMENT FAILED");
					}

					const { method, status } = payment.data.items[0];
					setUserPayment(
						method,
						status === "captured" ? "successful" : "failed"
					);
				},

				prefill: {
					name: currentUser?.displayName || null,
					email: currentUser?.email || null,
				},
				theme: {
					color: "#000000",
				},
			};

			// This type is any since there is no specific type for Razorpay method in Razorpay Docs
			const rzp1 = new (window as any).Razorpay(options);
			rzp1.open();
		} catch (error) {
			console.error("Payment error:", error);
			// Handle error: Show appropriate message to the user or retry payment.
		} finally {
			setPaymentInProgress(false);
		}
	};

	return (
		<Button
			onClick={paymentHandler}
			isLoading={paymentInProgress}
			buttonType={BUTTON_TYPE_CLASSES.inverted}
		>
			PAY NOW (TEST)
		</Button>
	);
};

export default PaymentForm;
