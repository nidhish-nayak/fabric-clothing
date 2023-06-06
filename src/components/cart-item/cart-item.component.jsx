import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./cart-item.styles";
import {
    CartItemContainer,
    ItemDetails,
    ItemImage,
    Name,
} from "./cart-item.styles";

const CartItem = () => {

    const cartItem = useSelector(selectCartItems);
    const { imageUrl, name, price, quantity } = cartItem;

    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt="alternative" />
            <ItemDetails>
                <Name>{name}</Name>
                <span>{`${quantity} x $${price}`}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
