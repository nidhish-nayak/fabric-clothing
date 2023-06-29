import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 })
    }).then((res) => res.json())

    const { paymentIntent: { client_secret } } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Nidhish"
        }
      }
    })

    if (paymentResult.error) {
      alert(paymentResult.error)
    }
    else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment succeeded')
      }
    }

  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
          PAY NOW
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm;