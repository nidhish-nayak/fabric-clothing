import { CardElement } from '@stripe/react-stripe-js';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FormContainer } from './payment-form.styles';

import { PaymentButton, PaymentFormContainer } from './payment-form.styles';

const PaymentForm = () => {

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment:</h2>
        <p>This functionality is in progress !</p>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;