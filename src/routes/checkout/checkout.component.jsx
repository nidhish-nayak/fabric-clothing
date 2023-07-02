import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import Footer from "../../components/footer/footer.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import OrdersPreview from "../../components/orders-preview/orders-preview.component";
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    PaymentContainer,
    Total,
} from "./checkout.styles";

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <Fragment>
            <CheckoutContainer>
                <CheckoutHeader>
                    <HeaderBlock>
                        <span>Product</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Description</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Quantity</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Price</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Remove</span>
                    </HeaderBlock>
                </CheckoutHeader>
                {cartItems.map((cartItem) => (
                    <CheckoutItems key={cartItem.id} cartItem={cartItem} />
                ))}
                <PaymentContainer>
                    <Total>Total: <span>₹</span> {cartTotal}</Total>
                    <PaymentForm />
                </PaymentContainer>
                <OrdersPreview />
            </CheckoutContainer>
            <Footer />
        </Fragment>
    );
};

export default Checkout;
