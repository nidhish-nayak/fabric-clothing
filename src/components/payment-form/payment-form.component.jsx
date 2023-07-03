import axios from 'axios';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { userSelector } from '../../store/user/user.selector';

import { setOrder, setPaymentDetails } from '../../store/orders/orders.reducer';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const PaymentForm = () => {

  const dispatch = useDispatch()

  const [paymentInProgress, setPaymentInProgress] = useState(false);

  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(userSelector);
  const cartItems = useSelector(selectCartItems);

  const setUserOrder = () => dispatch(setOrder(cartItems));
  const setPayment = (method, status) => {
    dispatch(setPaymentDetails([method, status]));
  };

  const paymentHandler = async (e) => {

    e.preventDefault();
    setPaymentInProgress(true);

    const API_URL = 'https://healthy-crab-uniform.cyclic.app/';
    const orderUrl = `${API_URL}orders`;

    const response = await axios.get(orderUrl, {
      params: {
        price: cartTotal
      }
    });

    console.log(response)
    const { data } = response;
    const paymentUrl = `${API_URL}orders/${data.id}/payments`

    const options = {
      key: process.env.RAZOR_PAY_KEY_ID,
      amount: cartTotal,
      currency: "INR",
      name: "Fabric Clothing",
      description: "Finest quality clothing apparel",
      image: currentUser ? currentUser.photoURL : null,
      order_id: data.id,

      // Handles the payment status
      handler: async function (response) {
        const payment = await axios.get(paymentUrl, {
          params: {
            orderId: data.id
          }
        })

        // Fetching only one order data - [0] index
        const myPaymentStatus = payment.data.items[0].status;
        myPaymentStatus ? setUserOrder() : console.log("PAYMENT FAILED")
        console.log(payment)

        const { method, status } = payment.data.items[0];
        setPayment(method, status === "captured" ? "successful" : "failed");

      },

      prefill: {
        name: currentUser ? currentUser.displayName : null,
        email: currentUser ? currentUser.email : null,
      },
      theme: {
        color: "#000000",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();

    setPaymentInProgress(false);
  };

  return (
    <Button
      onClick={paymentHandler}
      isLoading={paymentInProgress}
      buttonType={BUTTON_TYPE_CLASSES.inverted}
    >
      PAY NOW
    </Button>
  )
}

export default PaymentForm;