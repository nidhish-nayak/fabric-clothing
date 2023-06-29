import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from '../../store/cart/cart.selector';
import { userSelector } from '../../store/user/user.selector';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(userSelector)

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then((res) => res.json())

    const { paymentIntent: { client_secret } } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest"
        }
      }
    })

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert('payment error: ', paymentResult.error)
    }
    else {
      console.log(paymentResult.paymentIntent);
      alert('payment success')
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
          PAY NOW
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm;