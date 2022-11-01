import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-content/cart-item.component";
import {
    CartDropDownContainer,
    CartItemContainer,
    EmptyMessage,
} from "./cart-dropdown.styles";
import "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };

    return (
        <CartDropDownContainer>
            <CartItemContainer>
                {cartItems.length ? (
                    cartItems.map((i) => <CartItem value={i} key={i.id} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItemContainer>
            <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT </Button>
        </CartDropDownContainer>
    );
};

export default CartDropdown;
