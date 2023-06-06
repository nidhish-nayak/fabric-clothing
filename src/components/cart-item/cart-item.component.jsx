import React from "react";
import "./cart-item.styles";
import {
    CartItemContainer,
    ItemDetails,
    ItemImage,
    Name,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {

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
