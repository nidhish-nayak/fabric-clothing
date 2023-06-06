import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import Footer from "../../components/footer/footer.component";
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
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
                <Total>Total: ${cartTotal}</Total>
            </CheckoutContainer>
            <Footer />
        </Fragment>
    );
};

export default Checkout;
