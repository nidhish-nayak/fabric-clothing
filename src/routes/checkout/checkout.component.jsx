import React, { useContext } from "react";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="checkout">
            <CheckoutItems />
            <div className="total">
                Total:
                {cartItems.reduce(
                    (total, cartItems) =>
                        total + cartItems.count * cartItems.price,
                    0
                )}
            </div>
        </div>
    );
};

export default Checkout;
