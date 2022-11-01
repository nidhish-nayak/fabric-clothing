import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-items.styles.jsx";
import {
    Arrow,
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Price,
    Quantity,
    RemoveButton,
    Value,
} from "./checkout-items.styles.jsx";

const CheckoutItems = ({ props }) => {
    const { name, imageUrl, price, count } = props;
    const { addItemToCart, removeItemFromCart, removeWholeItem } =
        useContext(CartContext);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => removeItemFromCart(props)}>
                    &#10094;
                </Arrow>
                <Value>{count}</Value>
                <Arrow onClick={() => addItemToCart(props)}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => removeWholeItem(props)}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItems;
