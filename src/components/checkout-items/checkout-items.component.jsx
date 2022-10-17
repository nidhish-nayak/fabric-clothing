import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-items.styles.scss";

const CheckoutItems = () => {
    const { cartItems, addItemToCart, removeItemFromCart } =
        useContext(CartContext);

    return (
        <div className="checkoutitems-container">
            <div className="item-headings">
                <div>Product</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Remove</div>
            </div>
            {cartItems.map((i) => (
                <div className="checkoutitems" key={i.id}>
                    <img
                        className="item-image"
                        src={i.imageUrl}
                        alt="alternate img"
                    />
                    <div className="item-name">{i.name}</div>
                    <div
                        className="item-arrow"
                        onClick={() => {
                            removeItemFromCart(i);
                        }}
                    >
                        &lt;
                    </div>
                    <div className="item-count">{i.count}</div>
                    <div
                        className="item-arrow"
                        onClick={() => {
                            addItemToCart(i);
                        }}
                    >
                        &gt;
                    </div>
                    <div className="item-price">{i.price}</div>
                    <div className="item-remove">X</div>
                </div>
            ))}
        </div>
    );
};

export default CheckoutItems;
