import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ value }) => {
    const { id, imageUrl, name, price, count } = value;
    return (
        <div className="cart-item-container" key={id}>
            <img src={imageUrl} alt="alternative" className="item-image" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span>{`${count} x $${price}`}</span>
            </div>
        </div>
    );
};

export default CartItem;
