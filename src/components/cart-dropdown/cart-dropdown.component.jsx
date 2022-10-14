import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartContent from "../cart-content/cart-content.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <CartContent value={cartItems} />
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
