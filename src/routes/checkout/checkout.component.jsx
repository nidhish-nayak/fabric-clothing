import React, { Fragment, useContext } from "react";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import Footer from "../../components/footer/footer.component";
import { CartContext } from "../../contexts/cart.context";
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from "./checkout.styles";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
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
                {cartItems.map((i) => (
                    <CheckoutItems key={i.id} props={i} />
                ))}
                <Total>Total: ${cartTotal}</Total>
            </CheckoutContainer>
            <Footer />
        </Fragment>
    );
};

export default Checkout;
