import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-items.styles.scss";

const CheckoutItems = ({ props }) => {
    const { name, imageUrl, price, count } = props;
    const { addItemToCart, removeItemFromCart, removeWholeItem } =
        useContext(CartContext);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    className="arrow"
                    onClick={() => removeItemFromCart(props)}
                >
                    &#10094;
                </div>
                <span className="value">{count}</span>
                <div className="arrow" onClick={() => addItemToCart(props)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div
                className="remove-button"
                onClick={() => removeWholeItem(props)}
            >
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItems;
