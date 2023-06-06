import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
    CartDropDownContainer,
    CartItemContainer,
    EmptyMessage,
} from "./cart-dropdown.styles";
import "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const { cartItems } = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };

    return (
        <CartDropDownContainer>
            <CartItemContainer>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItemContainer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.base}
                onClick={goToCheckoutHandler}
            >
                {" "}
                GO TO CHECKOUT{" "}
            </Button>
        </CartDropDownContainer>
    );
};

export default CartDropdown;
