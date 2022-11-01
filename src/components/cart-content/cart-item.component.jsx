import React from "react";
import "./cart-item.styles";
import {
    CartItemContainer,
    ItemDetails,
    ItemImage,
    Name,
} from "./cart-item.styles";

const CartItem = ({ value }) => {
    const { id, imageUrl, name, price, count } = value;
    return (
        <CartItemContainer key={id}>
            <ItemImage src={imageUrl} alt="alternative" />
            <ItemDetails>
                <Name>{name}</Name>
                <span>{`${count} x $${price}`}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
