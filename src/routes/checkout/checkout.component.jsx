import React, { useContext } from "react";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((i) => (
                <CheckoutItems key={i.id} props={i} />
            ))}
            <span className="total">
                Total:{" "}
                {cartItems.reduce(
                    (total, cartItems) =>
                        total + cartItems.count * cartItems.price,
                    0
                )}
            </span>
        </div>
    );
};

export default Checkout;
