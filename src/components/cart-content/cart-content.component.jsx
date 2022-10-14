import React from "react";
import "./cart-content.styles.scss";

const CartContent = ({ value }) => {
    return (
        <div className="cart-items">
            {value.map((i) => (
                <div className="item-container" key={i.id}>
                    <img
                        src={i.imageUrl}
                        alt="alternative"
                        className="item-image"
                    />
                    <div className="item-content">
                        <div>{i.name}</div>
                        <div>{`${i.count} x $${i.price}`}</div>
                    </div>
                </div>
            ))}
            {console.log(value)}
        </div>
    );
};

export default CartContent;
