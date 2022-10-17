import React from "react";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import "./checkout.styles.scss";

const Checkout = () => {
    return (
        <div className="checkout-container">
            <CheckoutItems className="checkout-items" />
            <div className="total">Total: </div>
        </div>
    );
};

export default Checkout;
