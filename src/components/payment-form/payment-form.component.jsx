import axios from 'axios';

import { useSelector } from 'react-redux';
import { userSelector } from '../../store/user/user.selector';

import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const PaymentForm = () => {

  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const currentUser = useSelector(userSelector);

  const paymentHandler = async (e) => {

    e.preventDefault();
    setPaymentInProgress(true);

    const API_URL = 'http://localhost:4000/';

    const orderUrl = `${API_URL}order`;
    const response = await axios.get(orderUrl);

    console.log("Response 12: ", response)
    const { data } = response;

    const options = {
      key: process.env.RAZOR_PAY_KEY_ID,
      name: "Fabric Clothing",
      description: "Best quality clothing apparel",
      image: currentUser.photoURL,
      order_id: data.id,
      prefill: {
        name: currentUser.displayName,
        email: currentUser.email,
      },
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      theme: {
        color: "#000000",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();

    setPaymentInProgress(false);

  };

  return (
    <Button onClick={paymentHandler} isLoading={paymentInProgress} buttonType={BUTTON_TYPE_CLASSES.inverted}>
      PAY NOW
    </Button>
  )
}

export default PaymentForm;